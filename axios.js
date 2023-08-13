import axios from "axios";

const instance = axios.create({
  baseURL: "https://isp-trade.onrender.com",
});

instance.interceptors.request.use((config) => {
  // eslint-disable-next-line no-undef
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
