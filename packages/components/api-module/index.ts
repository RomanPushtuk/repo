import axios from 'axios';

console.log(process.env);

const BASE_URL = String(process.env.REACT_APP_BASE_URL);
const API_KEY = String(process.env.REACT_APP_API_KEY);

console.log(BASE_URL, API_KEY);
const DEFAULT_SEARCH_PARAMS = {
  lat: '55.75396',
  lon: '37.620393',
  lang: 'en_US',
};
const REQUEST_HEADERS = {
  'X-Yandex-API-Key': API_KEY,
};

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: REQUEST_HEADERS,
  params: DEFAULT_SEARCH_PARAMS,
});

export { apiInstance };
