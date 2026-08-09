import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFoundHandler } from './middlewares/notFound.middleware.js';

dotenv.config();

const app: Express = express();

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
