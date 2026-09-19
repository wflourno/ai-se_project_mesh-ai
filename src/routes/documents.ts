import { Router } from 'express';
import { uploadDocument, listDocuments, fetchDocument, deleteDocument } from "../controllers/documents.js"

const allDocumentsRouter = Router();

allDocumentsRouter.post("/", uploadDocument);
allDocumentsRouter.get("/", listDocuments);
allDocumentsRouter.get("/:id", fetchDocument);
allDocumentsRouter.delete("/:id", deleteDocument);

export { allDocumentsRouter };