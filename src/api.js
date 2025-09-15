import axios from "axios";

const API = axios.create({
  baseURL: "https://prf-backend-ck59.onrender.com/api/v2/auth", 
  withCredentials: true, 
});
export default API;
