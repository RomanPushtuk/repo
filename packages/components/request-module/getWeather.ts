import axios from 'axios';

export const BASE_URL = 'https://api.weather.yandex.ru/v2/informers';
export const API_KEY = '97dc3ae8-ebd0-4a15-800f-2ca4f439395d';

export const DEFAULT_SEARCH_PARAMS = {
  lat: '55.75396',
  lon: '37.620393',
  lang: 'en_US',
};
export const REQUEST_HEADERS = {
  'X-Yandex-API-Key': API_KEY,
};

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: REQUEST_HEADERS,
  params: DEFAULT_SEARCH_PARAMS,
});

export const getWeather = () => api.get('/');
