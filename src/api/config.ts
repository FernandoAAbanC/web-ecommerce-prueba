import axios from "axios";
const URL_API = process.env.URL_SERVER;


export const instance = axios.create({
  baseURL: URL_API,
  timeout: 5000,

});