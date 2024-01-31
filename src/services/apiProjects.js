import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

export const getProjects = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
