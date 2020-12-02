import axios from "axios";
import { token, validToken, refreshToken } from "hooks/authentication";

const open = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Cache-Control": "no-store",
  },
});

const secure = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Cache-Control": "no-store",
  },
});

secure.interceptors.request.use(
  async (config) => {
    let currentToken;
    if (token && validToken()) {
      currentToken = token;
    } else {
      // Token not present, or expired, attempt to refresh
      currentToken = refreshToken();
    }
    config.headers.Authorization = `Bearer ${currentToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default { open, secure };
