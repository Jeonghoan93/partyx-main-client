import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://yourbackendserver.com/api"
    : "http://localhost:3001/api";

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default api;
