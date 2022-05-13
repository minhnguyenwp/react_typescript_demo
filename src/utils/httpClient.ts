import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API_URI } from 'configs/env.conf';

const httpClient: AxiosInstance = axios.create({
  baseURL: REACT_APP_API_URI,
  headers: {
    'Content-type': 'application/json',
  },
});

httpClient.interceptors.request.use(function handleRequest(reqConfig) {
  const configOverride = reqConfig;

  return configOverride;
});

export default httpClient;
