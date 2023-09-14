import axios from "axios";
import "regenerator-runtime/runtime";
import { useQuery } from "react-query";

// retrieve all pokemon 
export const usePokemon = () => {
  return useQuery("pokemon", async () => {
    const {data} = await axios.get(`${API_URL}/api/pokemon`);
    return data;
  })
}

// submit new pokemon 
export const postPokemon = async (pokemon) => {
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
