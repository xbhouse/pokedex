import axios from "axios";
import "regenerator-runtime/runtime";

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

// submit new pokemon 
export const addPokemon = async (pokemon) => {
  return await axios.post('/api/pokemon', {
    name: pokemon.name,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    return res;
  })
  .catch((error) => {
    return error;
  })
}
