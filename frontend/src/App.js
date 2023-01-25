import React from 'react';
import {Header, Greeting} from './components';
import './index.css';

const App = () => {
  return (
    <div className="App">
      {<Header/>}
      {<Greeting/>}
    </div>
  )
}

export default App;