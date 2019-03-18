import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
});

export default api;
