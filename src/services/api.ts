import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // process.env.REACT_APP_API_URL
});

export default api;
