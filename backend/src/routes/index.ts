import { Router } from 'express';
import inquiryRoutes from './inquiry.routes.js';
import healthRoutes from './health.routes.js';

const router = Router();

router.use('/inquiries', inquiryRoutes);
router.use('/health', healthRoutes);

export default router;
