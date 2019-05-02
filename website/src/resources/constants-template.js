// Replace IP With the correct one for your env
const SDOW_API_URL_DEV = 'http://IP:5000';
const SDOW_API_URL_PROD = 'http://IP:8888';

export const SDOW_API_URL =
  process.env.NODE_ENV === 'production' ? SDOW_API_URL_PROD : SDOW_API_URL_DEV;

export const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';
