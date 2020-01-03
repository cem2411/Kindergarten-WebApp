import axios from "axios";

const baseURL = process.env.USER_SERVICE_URL || "http://localhost:5000";

let instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

export function register(user) {
  return instance.post("/user/register", user);
}

export function login({ email, password }) {
  return instance.get("/user/login", {
    params: {
      email: email,
      password: password
    }
  });
}
