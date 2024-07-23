
import User from '../models/user.model.js';
import bcrypt, { hash } from 'bcrypt';


const registerUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
        res.status(400).json({ message: 'Vous devez remplir tous les champs' });
    }
    try {
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) throw err;
            const user = {
                firstname,
                lastname,
                email,
                password: hash
            }
            const result = await User.createUser(user);
            if (!result.affectedRows) {
                res.status(500).json({ message: 'Création de l\'utilisateur impossible', error : result.error });
            } else {
                res.status(200).json({ message: 'Utilisateur créé', result });
            }
        })
    } catch (error) {
        res.status(500).json({ message: 'Création de l\'utilisateur impossible', error : error.message });
    }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Vous devez remplir tous les champs' });
    }
    try {
        const user = await User.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        req.session.isLogged = true;
        req.session.user = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        };
        return res.status(200).json({ message: 'Utilisateur connecté', user });
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la connexion', error : error.message });
    }
}


const logoutUser = (req, res) => {
    req.session.destroy();
    res.clearCookie('session_id');
    return res.status(200).json({ message: 'Vous êtes déconnecté' });
}


const updateUser = async (req, res) => {

    const { firstname, lastname, email, avatar, birthdate, password } = req.body;
    if (!firstname || !lastname || !email || !avatar || !birthdate || !password) {
        return res.status(400).json({ message: 'Vous devez remplir tous les champs' });
    }

    const response = await User.updateUser(req.body);
    if (!response.affectedRows) {
        return res.status(500).json({ message: 'Erreur lors de la modification', error});
    }
    res.status(200).json({ message: 'Utilisateur modifié', response });
}


const me = async (req, res) => {
    return res.status(200).json({ message: 'Vous êtes connecté', user: req.session.user || {}});
}

const deleteUser = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Vous devez remplir tous les champs' });
    }
    try {
        const response = await User.deleteUser(id);
        if (!response.affectedRows) {
        return res.status(500).json({ message: 'Erreur lors de la suppression', error});
        }
        res.status(200).json({ message: 'Utilisateur supprimé', response });
    } catch (error) {
    return res.status(500).json({ message: 'Erreur lors de la suppression', error });
    }
}


export { registerUser, loginUser, me, logoutUser, updateUser, deleteUser };
