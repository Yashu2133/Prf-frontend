import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-flow-gb7g.onrender.com/api/v2", 
  withCredentials: true, 
});
export default API;
