import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3001/api/v2/auth"
    : "https://prf-backend-ck59.onrender.com/api/v2/auth",
  withCredentials: true,
});

export default API;
