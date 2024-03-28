import axios from "./axios.js";


export const getSpentsRequest = () => axios.get('/spents');
export const getSpentRequest = (id) => axios.get(`/spents/${id}`)
export const createSpentRequest= (spent) => axios.post('/spents', spent)
export const updateSpentRequest = (id, spent) => axios.put(`/spents/${id}`, spent)
export const deleteSpentRequest = (id) => axios.delete(`/spents/${id}`) 