import axios from 'axios';

const BASE_URL = 'https://api.weather.yandex.ru/v2';
const URL = '/informers';
const DEFAULT_SEARCH_PARAMS = {
  lat: '55.75396',
  lon: '37.620393',
  lang: 'en_US',
};
const REQUEST_HEADERS = {
  'X-Yandex-API-Key': '97dc3ae8-ebd0-4a15-800f-2ca4f439395d',
};

const apiInstance = axios.create({
  baseURL: `${BASE_URL}${URL}`,
  timeout: 1000,
  headers: REQUEST_HEADERS,
  params: DEFAULT_SEARCH_PARAMS,
});

export { apiInstance };
