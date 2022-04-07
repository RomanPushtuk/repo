export const BASE_URL = String(process.env.REACT_APP_BASE_URL);
export const API_KEY = String(process.env.REACT_APP_API_KEY);

export const DEFAULT_SEARCH_PARAMS = {
  lat: "55.75396",
  lon: "37.620393",
  lang: "en_US",
};
export const REQUEST_HEADERS = {
  "X-Yandex-API-Key": API_KEY,
};
