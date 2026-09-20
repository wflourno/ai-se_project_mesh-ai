import type { Request, Response } from 'express';

export const uploadDocument = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {},
    error: null,
  });
};

export const listDocuments = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {},
    error: null,
  });
};

export const fetchDocument = (req: Request, res: Response): void => {
  const id: string = typeof req.params.id === 'string' ? req.params.id : '';
  res.status(200).json({
    success: true,
    data: { id },
    error: null,
  });
};

export const deleteDocument = (req: Request, res: Response): void => {
  const id: string = typeof req.params.id === 'string' ? req.params.id : '';
  res.status(204).send();
};

