import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api/v2/auth", 
  withCredentials: true, 
});

export default API;
