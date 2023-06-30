import React from 'react';
import {Header, PokemonForm} from './components';
import './index.css';

const App = () => {
  return (
    <div className="App">
      {<Header/>}
      {<PokemonForm/>}
    </div>
  )
}

export default App;