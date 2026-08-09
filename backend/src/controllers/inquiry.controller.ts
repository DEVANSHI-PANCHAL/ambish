import { Request, Response, NextFunction } from 'express';
import { inquiryService } from '../services/inquiry.service.js';
import { sendSuccess, sendError } from '../utils/apiResponse.js';

export class InquiryController {
  async createInquiry(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, company, mobile, product, message } = req.body;

      if (!name || !mobile || !product) {
        return sendError(res, 'Name, mobile, and product are required fields.', 400);
      }

      const inquiry = await inquiryService.createInquiry({
        name: String(name).trim(),
        company: company ? String(company).trim() : '',
        mobile: String(mobile).trim(),
        product: String(product).trim(),
        message: message ? String(message).trim() : '',
      });

      return sendSuccess(res, inquiry, 'Inquiry submitted successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getAllInquiries(_req: Request, res: Response, next: NextFunction) {
    try {
      const inquiries = await inquiryService.getAllInquiries();
      return sendSuccess(res, inquiries, 'Inquiries retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  async getInquiryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const inquiry = await inquiryService.getInquiryById(id);

      if (!inquiry) {
        return sendError(res, 'Inquiry not found', 404);
      }

      return sendSuccess(res, inquiry, 'Inquiry retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  async deleteInquiry(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await inquiryService.deleteInquiry(id);
      return sendSuccess(res, null, 'Inquiry deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}

export const inquiryController = new InquiryController();
