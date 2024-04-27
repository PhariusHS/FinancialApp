import { API_KEY } from "./config/config.js";

const access_key = API_KEY;


export const convert = () => {
  fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${access_key}`)
  .then(response => {
    return response.json();
  })
  .then (data => {
    console.log('Data: ', data)
  })
  .catch(error => {
    console.error('Problem fetching data', error)
  }) 
};
