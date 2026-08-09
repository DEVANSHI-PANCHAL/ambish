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

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, '[]', 'utf8');
  }
}

export async function readInquiries(): Promise<InquiryRecord[]> {
  await ensureStore();
  const raw = await fs.readFile(filePath, 'utf8');

  try {
    return JSON.parse(raw) as InquiryRecord[];
  } catch {
    return [];
  }
}

export async function saveInquiry(input: Omit<InquiryRecord, 'id' | 'createdAt'>): Promise<InquiryRecord> {
  await ensureStore();

  const inquiries = await readInquiries();
  const record: InquiryRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...input,
  };

  inquiries.unshift(record);
  await fs.writeFile(filePath, JSON.stringify(inquiries, null, 2), 'utf8');

  return record;
}
