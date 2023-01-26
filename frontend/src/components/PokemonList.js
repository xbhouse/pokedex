import React, {useState, useEffect} from 'react';
import { getPokemon } from '../services/Pokemon';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    refreshList(); 
  }, []);

  const refreshList = () => {
    getPokemon().then(pokemonList => {
      if(pokemonList.status === 200) {
        setPokemon(pokemonList.data);
      }
    })
  }

  return (
   <div>
    <h1>Pokemon List</h1>
    {pokemon.map(p => <div key={p.name}>{p.name}</div>)}
   </div>
  )
}

export default PokemonList;
