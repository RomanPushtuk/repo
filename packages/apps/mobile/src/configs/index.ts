import Config from 'react-native-config';

export const BASE_URL = String(Config.REACT_APP_BASE_URL);
export const API_KEY = String(Config.REACT_APP_API_KEY);

export const DEFAULT_SEARCH_PARAMS = {
  lat: '55.75396',
  lon: '37.620393',
  lang: 'en_US',
};
export const REQUEST_HEADERS = {
  'X-Yandex-API-Key': API_KEY,
};

export const config = {
  baseURL: String(BASE_URL),
  timeout: 1000,
  headers: REQUEST_HEADERS,
  params: DEFAULT_SEARCH_PARAMS,
};
