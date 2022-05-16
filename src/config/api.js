import axios from "axios";

//create base URL
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

//set auth token header
export const setAuthToken = (token) => {
  // console.log(token);
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
