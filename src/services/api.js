import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redux-cms.iran.liara.run/",
});

export default axiosInstance;

//https://api.slingacademy.com/v1/sample-data/users
