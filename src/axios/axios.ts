import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.100.3:5000/api/',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'access-control-allow-credentials': 'true',
  },
});

api.interceptors.response.use(
  function (response: any) {
    const { status, data } = response;
    switch (status) {
      case 200:
        return Promise.resolve(data);
      default:
        return Promise.reject();
    }
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);
