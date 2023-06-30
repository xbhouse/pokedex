import axios from "axios";
import "regenerator-runtime/runtime";

// retrieve all pokemon 
export const getPokemon = () => {
  return axios.get(`${API_URL}/api/pokemon`)
  .then(res => {
    console.log(res);
    return res;
  })
  .catch((error) => {
    return error;
  })
}

// submit new pokemon 
export const addPokemon = async (pokemon) => {
  return await axios.post(`${API_URL}/api/pokemon`, JSON.stringify(pokemon), {
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
