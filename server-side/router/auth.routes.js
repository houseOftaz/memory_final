
import { Router } from 'express';
import { registerUser, loginUser, me, updateUser, deleteUser } from '../controllers/user.controller.js';


const auth_router = Router();

auth_router.post('/register', registerUser);

auth_router.post('/login', loginUser);

auth_router.get('/me', me);

auth_router.patch('/update', updateUser);

auth_router.delete('/delete', deleteUser);

// route pour obternir un utilisateur par ID
//auth_router.get('/:id', getUser);

// route pour obtenir tous les utilisateur
//auth_router.get('/', getUsers);

export default auth_router;
