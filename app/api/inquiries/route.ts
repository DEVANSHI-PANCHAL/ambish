import { NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/inquiries-store';

const BACKEND_URL = process.env.EXPRESS_BACKEND_URL || 'http://localhost:5000';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Attempt to send to Express Backend + Prisma MongoDB service
    try {
      const backendRes = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (backendRes.ok) {
        const backendData = await backendRes.json();
        return NextResponse.json(backendData, { status: 201 });
      }
    } catch {
      // Backend server not running yet or unreachable, fallback to local file store
    }

    // Fallback store
    const inquiry = await saveInquiry({
      name: String(body?.name ?? '').trim(),
      company: String(body?.company ?? '').trim(),
      mobile: String(body?.mobile ?? '').trim(),
      product: String(body?.product ?? '').trim(),
      message: String(body?.message ?? '').trim(),
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error('Inquiry save failed', error);
    return NextResponse.json({ success: false, error: 'Failed to save inquiry' }, { status: 500 });
  }
}

