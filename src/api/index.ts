import axios, { AxiosResponse } from 'axios';
import { API_ADDRESS } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_ADDRESS,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'access-control-allow-credentials': 'true',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    switch (status) {
      case 200:
      case 201:
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

export default api;
