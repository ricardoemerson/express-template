import axios from 'axios';

const api = axios.create({
  baseURL: 'http://base-url.com',
});

export default api;
