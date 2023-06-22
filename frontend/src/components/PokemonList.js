import React, {useState, useEffect} from 'react';
import {getPokemon, addPokemon} from '../services/Pokemon';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  // retrieve all entries on first load of the page
  useEffect(() => {
    refreshList(); 
  }, [pokemon]);

  // retrieve all entries from server 
  const refreshList = () => {
    getPokemon().then(pokemonList => {
      if(pokemonList.status === 200) {
        setPokemon(pokemonList.data);
      }
    })
  }

  // add a new entry
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Array.from(event.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
    
    const result = addPokemon(data);
    console.log(result.then(data => console.log(data)));
    event.target.reset();
  }

  return (
   <div>
    <h1>Pokemon</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"></input>
      <button type="submit">Add Pokemon</button>
    </form>
    {pokemon.map(p => <div key={p.id}>{p.name}</div>)}
   </div>
  )
}

export default PokemonList;
