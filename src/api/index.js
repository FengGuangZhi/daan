import axios from "axios";
let allApi = axios.create({
  baseURL: "/api",
  timeout: 2000,
});
export default allApi;
