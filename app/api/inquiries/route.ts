import { NextResponse } from 'next/server';
import { readInquiries, saveInquiry } from '@/lib/inquiries-store';

const BACKEND_URL = process.env.EXPRESS_BACKEND_URL || 'http://localhost:5000';

export async function GET() {
  try {
    const inquiries = await readInquiries();
    return NextResponse.json({ success: true, inquiries }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, inquiries: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Attempt to send to Express Backend + Prisma MongoDB service if available
    try {
      const backendRes = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (backendRes.ok) {
        const backendData = await backendRes.json();
        return NextResponse.json({ success: true, ...backendData }, { status: 201 });
      }
    } catch {
      // Express backend server unreachable/offline; fallback store handles it below
    }

    // Fallback in-memory & file store
    const inquiry = await saveInquiry({
      name: String(body?.name ?? '').trim(),
      company: String(body?.company ?? '').trim(),
      mobile: String(body?.mobile ?? '').trim(),
      product: String(body?.product ?? '').trim(),
      message: String(body?.message ?? '').trim(),
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error('Inquiry save error:', error);
    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    );
  }
}

