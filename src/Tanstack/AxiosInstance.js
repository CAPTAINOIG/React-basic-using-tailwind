// src/axiosInstance.js
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // JSONPlaceholder base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'application/json',
  },
});

export default AxiosInstance;
