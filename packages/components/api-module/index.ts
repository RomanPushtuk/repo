import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createApi = (config: AxiosRequestConfig): AxiosInstance => {
  const apiInstance = axios.create(config);
  return apiInstance;
};

export { createApi };
