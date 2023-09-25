import axios from 'axios';
import { useEffect } from 'react';

const axiosInstance = axios.create();

export function configureAxios() {
  const API_KEY = import.meta.env.VITE_BASE_API_KEY;

  axiosInstance.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
}

export default function AxiosSetup() {
  useEffect(() => {
    configureAxios();
  }, []);

  return null;
}

export { axiosInstance };
