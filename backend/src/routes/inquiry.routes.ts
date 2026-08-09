import { Router } from 'express';
import { inquiryController } from '../controllers/inquiry.controller.js';

const router = Router();

router.post('/', inquiryController.createInquiry);
router.get('/', inquiryController.getAllInquiries);
router.get('/:id', inquiryController.getInquiryById);
router.delete('/:id', inquiryController.deleteInquiry);

export default router;
