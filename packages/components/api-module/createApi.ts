import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class Api {
  private instance: AxiosInstance | null = null;

  public useConfig(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  public getInstance(): AxiosInstance {
    if (!this.instance)
      throw Error("Can't use axios instance before initialize them");

    return this.instance;
  }
}

const api = new Api();

export { api };
