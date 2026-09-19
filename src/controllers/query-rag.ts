import type { Request, Response } from 'express';

export const postQuery = (req: Request, res: Response): void => {
  const question: string = req.body.question;

  res.status(200).json({
    success: true,
    data: { question, answer: "Stub answer" },
    error: null,
  });
};
