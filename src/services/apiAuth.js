import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${baseURL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
