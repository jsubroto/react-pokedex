import { useEffect, useState } from 'react';
import { Pokemons } from './types';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState<Pokemons>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <div>
      <h1>Pokédex</h1>
    </div>
  );
}

export default App;
