import { Router } from 'express';
import { postQuery } from '../controllers/query-rag.js';

const queryRouter = Router();

queryRouter.post("/", postQuery);

export { queryRouter };