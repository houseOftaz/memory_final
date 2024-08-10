import bcrypt, { hash } from "bcrypt";
import User from "../models/User.model.js";
import { upload } from "../config/images.config.js";

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
          role: user.role,
          id: result.insertId,
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
            role: user.role,
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
        });
      }
    });
  } catch (error) {
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
    if (user.is_banned) {
      return res.status(403).json({ message: "Utilisateur banni" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    req.session.isLogged = true;
    req.session.user = {
      role: user.role,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
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
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erreur lors de l'upload", error });
    }
    const { firstname, lastname, email } = JSON.parse(req.body.data);
    if (!firstname || !lastname || !email) {
      return res
        .status(400)
        .json({ message: "Vous devez remplir tous les champs" });
    }
    console.log(req.file.filename);
    let avatar = req.file ? `${req.file.filename}` : "";

    try {
      const response = await User.updateUser(
        JSON.parse(req.body.data),
        req.session.user.id,
        avatar
      );
      if (!response[0].affectedRows) {
        // sous quelle forme on recoit le resultat de la requete
        return res
          .status(500)
          .json({ message: "Erreur lors de la modification" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la modification", error });
    }

    req.session.isLogged = true;
    req.session.user = {
      id: req.session.user.id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      avatar: avatar,
      role: req.session.user.role,
    };
    res.status(200).json({ user: req.session.user });
  });
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
