import { post } from 'aws-amplify/api';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    await post({
      apiName: 'contactApi',
      path: '',
      options: {
        body: {
          ...formData,
        },
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}; 
