import React, {useState} from 'react';
import {usePokemon, postPokemon} from '../services/Pokemon';
import PokemonCard from './PokemonCard';

const PokemonForm = () => {
  const [pokemon, setPokemon] = useState({});
  const [count, setCount] = useState(0);
  const {status, data, error} = usePokemon();

  // retrieve all entries from server 
  const refreshList = () => {
    if(data) {
      setPokemon(data);
    }
  }

  // add a new entry
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Array.from(event.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

    const result = postPokemon(data);
    console.log(result.then(data => console.log(data)));
    event.target.reset();
    setCount((count) => count + 1);
  }

  // view updated pokedex on button click
  const handleViewPokedex = (event) => {
    event.preventDefault();
    refreshList();
  }

  return (
   <div className="page-container">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" name="name" placeholder="Name"></input>
        <input className="form-input" type="text" name="level" placeholder="Level"></input>
        <input className="form-input" type="text" name="pokemonType" placeholder="Type"></input>
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
    <div className="text-center button-container">
      <button type="submit" onClick={handleViewPokedex}>View updated Pokedex</button>
    </div>
    <div className="pokemon-list">
      <PokemonCard pokemon={pokemon}/>
      </div>
   </div>
  )
}

export default PokemonForm;
