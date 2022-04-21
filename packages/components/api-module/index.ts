import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export class ApiInstance {
  instance: null | AxiosInstance = null;

  setConfig(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  getInstance(): AxiosInstance {
    if (!this.instance) throw Error();
    return this.instance;
  }
}

export const api = new ApiInstance();

export type { AxiosInstance, AxiosRequestConfig };
