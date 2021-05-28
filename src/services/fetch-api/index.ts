import axios from "axios";

export const axiosFetchApi = axios.create({ 
  baseURL: String(process.env.REACT_APP_URL_API),
  timeout: 10000,
});