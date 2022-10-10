import { useEffect, useState } from 'react'
import { typeColor } from '../constants'
import { fetchJson } from '../lib/fetch'
import { PokemonData, PokemonProps } from '../types'

const padWithZeroes = (id: number) => id.toString().padStart(3, '0')
const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

export const Pokemon = ({
	name,
	url
}: PokemonProps) => {
	const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)

	useEffect(() => {
		const getPokemon = async () => {
      try {
        const data = await fetchJson(url)
        setPokemonData({
					id: data.id,
					imageUrl: data.sprites.other['official-artwork'].front_default,
					types: data.types.map((type: { type: { name: string } }) => 
						type.type.name
					)
				})
      } catch (e) {
        console.error(e)
      }
    }
    getPokemon()
	}, [url])

	const typeElements = pokemonData?.types.map(type => 
		<div 
			key={type}
			className='w-28 text-white rounded'
			style={{ backgroundColor: typeColor.get(type) }}
		>
			<p className='text-xs text-center pb-0.5'>{type}</p>
		</div>
	)

	return (
		<div>
			<img
				className='w-full bg-gray-100 rounded' 
				src={pokemonData?.imageUrl} 
				alt={name} 
			/>
			<div className='mx-2 mb-12'>
				<p className='text-xs font-bold text-gray-400'>
					#{padWithZeroes(pokemonData?.id ?? 0)}
				</p>
				<h1 className='my-1 font-medium text-xl'>
					{capitalize(name)}
				</h1>
				<div className='flex gap-1'>
					{typeElements}
				</div>
			</div>
		</div>
	)
}
