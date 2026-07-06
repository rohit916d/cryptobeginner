import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  timeout: 15000,
});
