import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getMethod = (url, config = {}) => {
  return apiClient.get(url, config);
};

const deleteMethod = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const putMethod = (url, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const postMethod = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

export { getMethod, deleteMethod, putMethod, postMethod };
