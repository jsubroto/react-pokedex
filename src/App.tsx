import { useEffect, useState } from 'react'
import { Pokemon } from './components/Pokemon'
import { fetchJson } from './lib/fetch'
import { responsiveGrid } from './styles'
import { PokemonProps } from './types'

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchJson('https://pokeapi.co/api/v2/pokemon/')
        setPokemons(data.results)
      } catch (e) {
        console.error(e)
      }
    }
    getPokemons()
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
