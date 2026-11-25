import axios from "axios";
import { TokenStorage } from "./tokenStorage";

const BASE_URL = process.env.EXPO_BASE_URL || "";

const apiHandler = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

apiHandler.interceptors.request.use(async config => {
  const token = await TokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization(`Bearer ${token}`);
  }
  return config;
});

apiHandler.interceptors.response.use(
  response => response,
  async error => Promise.reject(error)
);
