import { Router } from 'express';
import { getCurrentUser } from '../controllers/auth.js';
import { login } from '../controllers/auth.js';
import { signup } from '../controllers/auth.js';

const authRouter = Router();

authRouter.get('/me', getCurrentUser);
authRouter.post('/login', login);
authRouter.post('/register', signup);

export { authRouter };