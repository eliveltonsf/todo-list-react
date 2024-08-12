import axios, { AxiosInstance } from "axios";

let api: AxiosInstance;

const token = localStorage.getItem("@todo-list:token");

if (token) {
  api = axios.create({
    baseURL: "http://localhost:4444",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
} else {
  api = axios.create({
    baseURL: "http://localhost:4444",
  });
}

export default api;
