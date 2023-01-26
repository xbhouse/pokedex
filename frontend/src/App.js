import React from 'react';
import {Header, PokemonList} from './components';
import './index.css';

const App = () => {
  return (
    <div className="App">
      {<Header/>}
      {<PokemonList/>}
    </div>
  )
}

export default App;