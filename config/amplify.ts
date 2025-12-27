import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    REST: {
      contactApi: {
        endpoint: import.meta.env.VITE_API_URL,
        region: "us-east-1",
      },
    },
  },
}); 
