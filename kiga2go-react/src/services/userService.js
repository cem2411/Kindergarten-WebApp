import axios from "axios";

const baseURL = process.env.USER_SERVICE_URL || "http://localhost:5000";

export async function login(email, password) {
  console.log(email);

  console.log(password);

  let response = await axios.get(`${baseURL}/user/login`, {
    params: {
      email: email,
      password: password
    }
  });
  console.log(response);
}
