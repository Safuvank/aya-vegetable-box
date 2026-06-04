'use server';

import nodemailer from 'nodemailer';

export async function sendEnquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, message: 'Please complete all required fields.' };
  }

  // Configure your email service transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Set this in your .env file
      pass: process.env.EMAIL_PASS, // Use a generated 16-character Google App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // The target inbox for user inquiries
    subject: `New Contact Form Enquiry from ${name}`,
    text: `Website Enquiry Details:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Thank you! Your enquiry has been sent successfully.' };
  } catch (error) {
    console.error('Nodemailer transmission error:', error);
    return { success: false, message: 'Failed to dispatch email. Please try again later.' };
  }
}