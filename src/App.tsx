import { useEffect, useState } from 'react';
import { Pokemon } from './components/Pokemon';
import { PokemonProps } from './types';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [])

  const pokemonElements = pokemons.map(pkmn => 
    <Pokemon key={pkmn.name} name={pkmn.name} url={pkmn.url}/>
  )

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemonElements}
      </ul>
    </div>
  );
}

export default App;
