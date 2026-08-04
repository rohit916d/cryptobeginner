import axios from "axios";

// Defaults to a same-origin relative path (works with the Vercel rewrite proxy).
// Set REACT_APP_BACKEND_URL for local dev against a separately-running backend
// (e.g. http://localhost:8000).
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";

export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  timeout: 15000,
});