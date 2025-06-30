import dotenv from 'dotenv';
dotenv.config();
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.SERVICE_ID!;
const TEMPLATE_ID = process.env.TEMPLATE_ID!;
const PUBLIC_KEY = process.env.PUBLIC_KEY!;

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const templateParams = {
      to_email: params.to,
      from_email: params.from,
      subject: params.subject,
      message: params.text,
      html_message: params.html
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('Email sent successfully', response);
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
}