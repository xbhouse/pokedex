import React, {useState, useEffect} from 'react';
import {getPokemon, addPokemon} from '../services/Pokemon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);

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
        <input type="text" name="name"></input>
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
    <div className="text-center button-container">
      <button type="submit" onClick={handleViewPokedex}>View updated Pokedex</button>
    </div>
    <div className="pokemon-list">
      {pokemon.map(p => 
        <div key={p.id}>
          <Card className="pokemon-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Name: {p.name}
              </Typography>
            </CardContent>
          </Card>
        </div>)}
      </div>
   </div>
  )
}

export default PokemonList;
