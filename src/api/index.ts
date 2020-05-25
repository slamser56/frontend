import axios, { AxiosResponse } from 'axios';
import apiConstants from './constants';

const api = axios.create({
  baseURL: apiConstants.ADDRESS,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'access-control-allow-credentials': 'true',
    Authorization: '',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    switch (status) {
      case 200:
        return Promise.resolve(data);
      default:
        return Promise.reject();
    }
  },
  (error: string) => Promise.reject(error),
);

export const autorizeApi = (token?: string):void => {
  api.defaults.headers.Authorization = token ? `Bearer ${token}` : null;
};

export default api;
