import { useEffect, useState } from 'react'
import { Pokemon } from './components/Pokemon'
import { fetchJson } from './lib/fetch'
import { responsiveGrid } from './styles'
import { PokemonProps } from './types'

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  useEffect(() => {
    fetchJson('https://pokeapi.co/api/v2/pokemon/')
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

export default App
