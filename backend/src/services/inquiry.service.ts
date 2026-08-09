import { prisma } from '../config/prisma.js';

export interface CreateInquiryDTO {
  name: string;
  company?: string;
  mobile: string;
  product: string;
  message?: string;
}

export class InquiryService {
  async createInquiry(data: CreateInquiryDTO) {
    return await prisma.inquiry.create({
      data: {
        name: data.name,
        company: data.company ?? '',
        mobile: data.mobile,
        product: data.product,
        message: data.message ?? '',
      },
    });
  }

  async getAllInquiries() {
    return await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getInquiryById(id: string) {
    return await prisma.inquiry.findUnique({
      where: { id },
    });
  }

  async deleteInquiry(id: string) {
    return await prisma.inquiry.delete({
      where: { id },
    });
  }
}

export const inquiryService = new InquiryService();
