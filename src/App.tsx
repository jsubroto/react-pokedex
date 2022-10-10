import { useEffect, useState } from 'react';
import { Pokemon } from './components/Pokemon';
import { PokemonProps } from './types';

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
      <h1 className='text-2xl text-center mt-4'>Pokédex</h1>
      <div>
        {pokemonElements}
      </div>
    </div>
  );
}

export default App;
