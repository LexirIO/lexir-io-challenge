import axios from 'axios';
import { BASE_URL } from '../config';

export const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
