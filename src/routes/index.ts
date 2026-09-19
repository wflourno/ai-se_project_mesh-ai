import { Router } from 'express';
import { authRouter } from './auth.js';
import { chatsRouter } from './chats.js';
import { allDocumentsRouter } from './documents.js';
import { queryRouter } from './query-rag.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/chats', chatsRouter);
router.use('/documents', allDocumentsRouter);
router.use('/query', queryRouter)

export default router;