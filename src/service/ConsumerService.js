import axios from "axios";

const url = "http://localhost:8080/ele";
const hellourl = "ele/Hello";

const getHello = () => {
  axios.get(url);
};

const getAll = () => {
  return axios.get(url);
};

const login = async (email, password) => {
  try {
    const response = await axios.post(url, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message || "An error occurred during login.";
  }
};

const getCbyEmailAndPassword = (user) => {
  return axios.post(url, user);
};

export default { getAll, getCbyEmailAndPassword, login, getHello };
