import axios from 'axios';
import { api } from '../env';

const PropertiesApi = axios.create({
  baseURL:
    api,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    "Content-Type": "application/json",
  },
});

PropertiesApi.interceptors.request.use(
  async (config) => {
    let token =  localStorage.getItem('token');
    token = token.replace(/['"]+/g, '');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  },
);

export default PropertiesApi;