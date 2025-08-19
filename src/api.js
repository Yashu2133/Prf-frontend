import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api/v2/auth", // 🔹 replace with your backend URL
  withCredentials: true, // if you use cookies
});

export default API;
