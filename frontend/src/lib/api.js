import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const API = `${BACKEND_URL}/api`;

console.log("Backend URL:", BACKEND_URL);
console.log("API URL:", API);

export const api = axios.create({
  baseURL: API,
  timeout: 15000,
});