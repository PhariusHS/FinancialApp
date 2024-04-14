import axios from "./axios.js";


export const registerRequest = user => axios.post('/register', user);
export const loginRequest = (id) => axios.get(`/spents/${id}`)