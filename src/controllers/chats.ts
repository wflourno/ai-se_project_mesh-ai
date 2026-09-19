import type { Request, Response } from 'express';

export const postCreateChat = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {},
    error: null,
  });
};

export const deleteChat = (req: Request, res: Response): void => {
  const id: string = req.params.id;

  res.status(204).json({
    success: true,
    data: { id },
    error: null,
  });
};

export const getChatsById = (req: Request, res: Response): void => {
  const id: string = req.params.id;

  res.status(200).json({
    success: true,
    data: { id },
    error: null,
  });
};

export const postSentMessage = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  const message: string = req.body.content;

  res.status(201).json({
    success: true,
    data: { id, message },
    error: null,
  });
};

export const getList = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {},
    error: null,
  });
};


