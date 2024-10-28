import { v4 as uuidv4 } from 'uuid';

export const generateUniqueLink = (email, linkId) => {
  const baseUrl = "https://style-your-brand.vercel.app/track"; 
  const params = new URLSearchParams({ email, linkId });
  return `${baseUrl}?${params.toString()}`;
};

export const generateUniqueId = () => {
  return uuidv4();
};
