import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(setPokemons)
  }, [])

  return (
    <div>
      <h1>Pokédex</h1>
    </div>
  );
}

export default App;
