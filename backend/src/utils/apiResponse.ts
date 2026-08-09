import { Response } from 'express';

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = 200
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function sendError(
  res: Response,
  error: string,
  statusCode = 500
) {
  return res.status(statusCode).json({
    success: false,
    error,
  });
}
