import { Request, Response } from 'express';
import { sendSuccess } from '../utils/apiResponse.js';

export function getHealth(_req: Request, res: Response) {
  return sendSuccess(
    res,
    {
      status: 'UP',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
    'Backend service is operational'
  );
}
