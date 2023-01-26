import axios from "axios";

// retrieve all pokemon 
export const getPokemon = () => {
  return axios.get('/api/pokemon')
  .then(res => {
    return res;
  })
  .catch((error) => {
    return error;
  })
}
