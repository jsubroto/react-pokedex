import { useEffect, useState } from 'react'
import { Pagination, Pokemon } from './components/index'
import { fetchJson } from './lib/fetch'
import { responsiveGrid } from './styles'
import { MoonSvg, SunSvg } from './svg/index'
import { PokemonProps } from './types'

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [previousUrl, setPreviousUrl] = useState('')
	const [nextUrl, setNextUrl] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)

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

  const toggleTheme = () => {
    const root = window.document.documentElement
    setDarkTheme(!darkTheme)
    if (!darkTheme) root.classList.add('dark')
    else root.classList.remove('dark')
  }

  const handlePagination = (url: string) => setUrl(url)
  return (
    <div className='max-w-[86%] mx-auto dark:bg-black dark:text-white'>
      <div className='flex justify-center pt-4'>
        <h1 className='text-3xl text-center'>Pokédex</h1>
        <button onClick={toggleTheme}>
          {darkTheme 
            ? <SunSvg />
            : <MoonSvg />
          }
        </button>
      </div>
      <Pagination 
        handleClick={handlePagination} 
        prevUrl={previousUrl} 
        nextUrl={nextUrl}
      />
      <div className={responsiveGrid}>
        {pokemonElements}
      </div>
      <footer className='mx-auto border-t md:w-2/3'>
        <p className='text-center py-2'>
          Copyright (c) 2022 Jaimes Subroto
        </p>
      </footer>
    </div>
  );
}

export default App
