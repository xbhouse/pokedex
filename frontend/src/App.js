import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Header, PokemonForm} from './components';
import './index.css';

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {<Header/>}
        {<PokemonForm/>}
      </QueryClientProvider>
    </div>
  )
}

export default App;