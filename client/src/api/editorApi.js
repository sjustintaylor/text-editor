import axios from "axios";
import jwt_decode from "jwt-decode";

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
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authOperations = {
  login = async (email) => {
    try {
    } catch (error) {
      console.error(error);
    }
  },
  logout = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  },
  refreshToken =async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  }
}

export default { open, secure };
