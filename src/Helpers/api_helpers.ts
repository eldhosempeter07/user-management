import axios from "axios";

const API_URL = "http://localhost:3333/users";
const axiosApi = axios.create({
  baseURL: API_URL,
});

export async function get(url:string, data?:object) {
  return await axiosApi
    .get(url, {params:data} )
    .then((response) => response.data);
}

export async function add(url:string, data:object, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function update(url:string, data:object, config = {}) {
  return await axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url:string, data?:object) {
  return await axiosApi
    .delete(url,  { ...data } )
    .then((response) => response.data);
}