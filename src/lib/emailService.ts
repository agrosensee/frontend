import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendWelcomeEmail = async (
  firstName: string,
  userEmail: string,
  tempPassword: string
): Promise<boolean> => {
  try {
    const templateParams = {
      firstName,
      userEmail,
      tempPassword,
      to_email: userEmail, // Göndəriləcək email
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('✅ Email uğurla göndərildi:', response);
    return true;
  } catch (error) {
    console.error('❌ Email göndərilmədi:', error);
    return false;
  }
};