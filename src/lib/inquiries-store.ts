import { promises as fs } from 'fs';
import path from 'path';

export type InquiryRecord = {
  id: string;
  name: string;
  company: string;
  mobile: string;
  product: string;
  message: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), 'data');
const filePath = path.join(dataDir, 'inquiries.json');

const memoryStore: InquiryRecord[] = [];

async function ensureStore() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, '[]', 'utf8');
    }
  } catch (error) {
    console.warn('Inquiry store filesystem access notice:', error);
  }
}

export async function readInquiries(): Promise<InquiryRecord[]> {
  try {
    await ensureStore();
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw) as InquiryRecord[];
  } catch {
    return memoryStore;
  }
}

export async function saveInquiry(input: Omit<InquiryRecord, 'id' | 'createdAt'>): Promise<InquiryRecord> {
  const record: InquiryRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...input,
  };

  memoryStore.unshift(record);

  try {
    await ensureStore();
    const inquiries = await readInquiries();
    inquiries.unshift(record);
    await fs.writeFile(filePath, JSON.stringify(inquiries, null, 2), 'utf8');
  } catch (error) {
    console.warn('Inquiry persistent save notice:', error);
  }

  return record;
}
