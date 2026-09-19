import { Router } from 'express';
import { postCreateChat } from '../controllers/chats.js';
import { deleteChat } from '../controllers/chats.js';
import { getChatsById } from '../controllers/chats.js';
import { postSentMessage } from '../controllers/chats.js';
import { getList } from '../controllers/chats.js';

const chatsRouter = Router();

chatsRouter.post("/", postCreateChat);
chatsRouter.delete("/:id", deleteChat);
chatsRouter.get("/:id", getChatsById);
chatsRouter.post("/:id/messages", postSentMessage);
chatsRouter.get("/", getList);

export { chatsRouter };