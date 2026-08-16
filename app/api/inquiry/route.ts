import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, mobile, product, message, _hp_trap, _form_time } = body;

    // 1. HONEYPOT BOT SHIELD: If hidden honeypot field is filled by an automated bot, silently ignore
    if (_hp_trap && _hp_trap.trim() !== '') {
      console.log('🤖 Spam bot submission blocked by Honeypot trap:', { name, mobile, _hp_trap });
      // Return simulated 200 OK so bot thinks it succeeded and stops retrying
      return NextResponse.json({ success: true, message: 'Inquiry processed' });
    }

    // 2. SPEED TRAP: If form was filled in under 1 second, it is an automated script
    if (_form_time && typeof _form_time === 'number') {
      const elapsedMs = Date.now() - _form_time;
      if (elapsedMs < 1000) {
        console.log(`🤖 Instant submission detected (${elapsedMs}ms). Blocked as bot.`);
        return NextResponse.json({ success: true, message: 'Inquiry processed' });
      }
    }

    // 3. Field Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!mobile || !mobile.trim()) {
      return NextResponse.json({ error: 'Mobile number is required' }, { status: 400 });
    }
    const cleanMobile = mobile.replace(/[\s+-]/g, '');
    if (cleanMobile.length < 10) {
      return NextResponse.json({ error: 'Please provide a valid 10-digit mobile number' }, { status: 400 });
    }
    if (!product || !product.trim()) {
      return NextResponse.json({ error: 'Product of interest is required' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'contact@ambishengineering.com';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 24px; text-align: center; border-bottom: 4px solid #E86A17;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Ambish Engineering</h2>
          <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;">New Machinery Website Inquiry</p>
        </div>
        
        <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
          <p style="margin-top: 0; font-size: 15px; font-weight: 600; color: #0f172a;">You received a new machinery inquiry from the website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 18px 0; background-color: #f8fafc; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 35%;">Product of Interest</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #E86A17;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Client Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Company Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Mobile Number</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                <a href="tel:${mobile}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${mobile}</a>
                &nbsp;|&nbsp;
                <a href="https://wa.me/${cleanMobile}" style="color: #16a34a; text-decoration: none; font-weight: 600;">WhatsApp Direct</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #64748b; vertical-align: top;">Message / Requirements</td>
              <td style="padding: 12px 16px; color: #0f172a; white-space: pre-wrap;">${message || 'No additional details provided.'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 12px; background-color: #fff7ed; border-left: 4px solid #E86A17; border-radius: 4px; font-size: 12px; color: #9a3412;">
            Submitted on: <strong>${timestamp} (IST)</strong> via <strong>ambishengineering.com</strong>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
          Ambish Engineering | Dealing in Heavy-Duty Construction Machinery Since 1976
        </div>
      </div>
    `;

    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail({
        from: `"Ambish Engineering Website" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: smtpUser,
        subject: `🔔 New Machinery Inquiry: ${product} - ${name}${company ? ` (${company})` : ''}`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: 'Inquiry email sent successfully' });
    }

    // Fallback: If Web3Forms Access Key is provided
    if (process.env.WEB3FORMS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY,
          subject: `🔔 Machinery Inquiry: ${product} - ${name}`,
          from_name: 'Ambish Engineering Website',
          name,
          company: company || 'Not provided',
          mobile,
          product,
          message: message || 'None',
        }),
      });

      if (response.ok) {
        return NextResponse.json({ success: true, message: 'Inquiry sent successfully via Web3Forms' });
      }
    }

    // If SMTP is not yet configured in .env, log inquiry to server console and return success
    console.log('--- NEW INQUIRY RECEIVED (Set SMTP_USER & SMTP_PASSWORD in .env.local to send direct emails) ---');
    console.log({ name, company, mobile, product, message, timestamp });

    return NextResponse.json({
      success: true,
      simulated: true,
      message: 'Inquiry received. Configure SMTP credentials in .env.local to deliver to inbox.',
    });
  } catch (error: any) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit inquiry. Please try again or reach us on WhatsApp.' },
      { status: 500 }
    );
  }
}
