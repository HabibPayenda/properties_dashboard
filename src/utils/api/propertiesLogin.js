import axios from 'axios';
import { api } from '../env';
const LoginApi = axios.create({
  baseURL:
    api,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    "Content-Type": "application/json",
  },
});


export default LoginApi;