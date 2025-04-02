import axios from "axios";
import store from "../redux/store";
import { toast } from "react-toastify";
import { logout } from "../Store/slices/authSlice";

const unauthorizedCodes = [401];

const BASE_URL = "https://api.fundsapp.co.za/api/v1";

// Create Axios Instance
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getState()?.auth?.token;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      if (unauthorizedCodes.includes(status)) {
        toast.error("Session expired. Please log in again.");
        store.dispatch(logout());
        window.location.href = "/";
        return;
      }

      toast.error(data?.message || "Server error occurred");
    } else {
      toast.error("Network error. Please try again.");
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;
