import { Router } from 'express';
import { getCurrentUser } from '../controllers/auth.js';
import { postCurrentLogin } from '../controllers/auth.js';
import { postCurrentRegister } from '../controllers/auth.js';

const authRouter = Router();

authRouter.get('/me', getCurrentUser);
authRouter.post('/login', postCurrentLogin);
authRouter.post('/register', postCurrentRegister);

export { authRouter };