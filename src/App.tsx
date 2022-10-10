import { useEffect, useState } from 'react'
import { Pagination } from './components/Pagination'
import { Pokemon } from './components/Pokemon'
import { fetchJson } from './lib/fetch'
import { responsiveGrid } from './styles'
import { PokemonProps } from './types'

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [previousUrl, setPreviousUrl] = useState('')
	const [nextUrl, setNextUrl] = useState('')

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchJson(url)
        setPokemons(data.results)
        setPreviousUrl(data.previous)
        setNextUrl(data.next)
      } catch (e) {
        console.error(e)
      }
    }
    getPokemons()
  }, [url])

  const pokemonElements = pokemons.map(pkmn => 
    <Pokemon key={pkmn.name} name={pkmn.name} url={pkmn.url}/>
  )

  const handlePagination = (url: string) => setUrl(url)

  return (
    <div className='max-w-[86%] mx-auto'>
      <h1 className='text-3xl text-center mt-4'>Pokédex</h1>
      <Pagination 
        handleClick={handlePagination} 
        prevUrl={previousUrl} 
        nextUrl={nextUrl}
      />
      <div className={responsiveGrid}>
        {pokemonElements}
      </div>
    </div>
  );
}

export default App
