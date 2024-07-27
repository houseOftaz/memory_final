import User from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";

// VERRIFIER LAFFICHAGE PASSWORD
const registerUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(400).json({ message: "Vous devez remplir tous les champs" });
  }
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) throw err;
      const user = {
        firstname,
        lastname,
        email,
        password: hash,
      };
      // CORRECTION renvoi user
      const result = await User.createUser(user);
      if (!result.affectedRows) {
        res.status(500).json({
          message: "Création de l'utilisateur impossible",
          error: result.error,
        });
      } else {
        req.session.user = {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        };
        req.session.save((err) => {
          if (err) {
            res.json({
              message: "Une erreur est survenue.",
              err: "Une erreur est survenue.",
            });
          }
        });
        res.status(200).json({
          message: "Utilisateur créé",
          user: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
        });
      }
    });
  } catch (error) {
    console.log("Erreur lors de la création de l'utilisateur", error);
    res.status(500).json({
      message: "Création de l'utilisateur impossible",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Vous devez remplir tous les champs" });
  }
  try {
    const user = await User.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    req.session.isLogged = true;
    req.session.user = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
    req.session.save((err) => {
      if (err) {
        res.json({
          message: "Une erreur est survenue.",
          err: "Une erreur est survenue.",
        });
      }
      return res
        .status(200)
        .json({ message: "Utilisateur connecté", user: req.session.user });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la connexion", error: error.message });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy(); // détruit la session de la base de données
  res.clearCookie("session_id"); // envoie un ordre au navigateur de supprimer le cookie grace au header Set-Cookie
  return res.status(200).json({ message: "Vous êtes déconnecté" });
};

const updateUser = async (req, res) => {
  const { firstname, lastname, email, avatar, birthdate, password } = req.body;
  if (!firstname || !lastname || !email || !avatar || !birthdate || !password) {
    return res
      .status(400)
      .json({ message: "Vous devez remplir tous les champs" });
  }

  const response = await User.updateUser(req.body);
  if (!response.affectedRows) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la modification", error });
  }
  res.status(200).json({ message: "Utilisateur modifié", response });
};

const me = async (req, res) => {
  return res
    .status(200) // ok
    .json({ user: req.session.user || {} });
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Vous devez remplir tous les champs" });
  }
  try {
    const response = await User.deleteUser(id);
    if (!response.affectedRows) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la suppression", error });
    }
    res.status(200).json({ message: "Utilisateur supprimé", response });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la suppression", error });
  }
};

export { registerUser, loginUser, me, logoutUser, updateUser, deleteUser };
