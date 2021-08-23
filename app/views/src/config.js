import axios from 'axios';

const status = 'dev'
export const API_URL = status === 'prod' ? 'http://103.123.8.52:8333/' : 'http://localhost:8000/api/'
export const TOKEN = "token"
export const BASE_URL = status ==='prod'? 'http://103.123.8.52:8075':'http://localhost:8000'

export const API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    "Content-Type": "application/json",
   // "Access-Control-Allow-Origin": "*"
  }
})
export const FILE_API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    // "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    "Content-Type": "multipart/form-data",
   // "Access-Control-Allow-Origin": "*"
  }
})
API.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem(TOKEN); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export const PUBLIC_API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers:{
    "Content-Type": "application/json"
  }
})

export const isLoggedIn=()=>{
  if(localStorage.getItem(TOKEN)===null){
    return false;
  }
  return true;
}

// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper




