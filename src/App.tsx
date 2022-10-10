import { useEffect, useState } from 'react';
import { Pokemon } from './components/Pokemon';
import { PokemonProps } from './types';

const responsiveGrid = `
  gap-6
  sm:grid
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
  2xl:grid-cols-6
`

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
    <div className='max-w-[86%] mx-auto'>
      <h1 className='text-2xl text-center my-4'>Pokédex</h1>
      <div className={responsiveGrid}>
        {pokemonElements}
      </div>
    </div>
  );
}

export default App;
