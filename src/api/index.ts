import axios, { AxiosResponse } from 'axios';
import apiConstants from './constants';
import { API_ADDRESS_EN } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_ADDRESS_EN,
  timeout: 15000,
  headers: {
    Accept: apiConstants.APP_JSON,
    'Content-Type': apiConstants.APP_JSON,
    'access-control-allow-credentials': true,
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    switch (status) {
      case 200:
      case 201:
      case 204:
        return Promise.resolve(data);
      default:
        return Promise.reject();
    }
  },
  (error: string) => Promise.reject(error),
);

export const autorizedApi = (token: string): void => {
  api.defaults.headers.Authorization = token ? `Bearer ${token}` : null;
};

export const acceptLanguage = (language: string): void => {
  api.defaults.headers['Accept-Language'] = language;
};

export default api;
