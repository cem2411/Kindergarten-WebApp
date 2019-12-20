import axios from "axios";

const baseURL = process.env.USER_SERVICE_URL || "http://localhost:5000";

export function login({ email, password }) {
  return axios.get(`${baseURL}/user/login`, {
    params: {
      email: email,
      password: password
    }
  });
}
