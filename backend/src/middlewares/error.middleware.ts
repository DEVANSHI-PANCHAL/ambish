import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/apiResponse.js';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error('Unhandled Error:', err);
  const message = err.message || 'Internal Server Error';
  return sendError(res, message, 500);
}
