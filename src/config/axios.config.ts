import axios from "axios";

const axiosInstance = axios.create({
  //local
  // baseURL: "http://localhost:1337/api",

  //online
  baseURL: "https://todo-with-strapi.onrender.com/api",
  timeout: 5000,
});

export default axiosInstance;
