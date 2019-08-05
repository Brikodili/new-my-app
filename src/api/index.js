import axios from 'axios';
import Cookie from 'js-cookie';

const token = Cookie.get('token');

export const api = axios.create({
  baseURL: 'http://68.183.119.148/api',
  headers: { Authorization: `Bearer ${token}` }
});
