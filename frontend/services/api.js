import axios from "axios";

const API = axios.create({
  baseURL: "https://utcons-assignment.onrender.com/api",
});

export default API;
