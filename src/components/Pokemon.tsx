import { useEffect, useState } from "react";
import { PokemonProps } from "../types";

type PokemonData = {
	id: number
	imageUrl: string
	types: { type: { name: string } }[]
}

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

const typeColor = new Map([
	['bug', '#A6B91A'],
	['dark', '#705746'],
	['dragon', '#6F35FC'],
	['electric', '#F7D02C'],
	['fairy', '#D685AD'],
	['fighting', '#C22E28'],
	['fire', '#EE8130'],
	['flying', '#A98FF3'],
	['ghost', '#735797'],
	['grass', '#7AC74C'],
	['ground', '#E2BF65'],
	['ice', '#96D9D6'],
	['normal', '#A8A77A'],
	['poison', '#A33EA1'],
	['psychic', '#F95587'],
	['rock', '#B6A136'],
	['steel', '#B7B7CE'],
	['water', '#6390F0'],
])

export const Pokemon = ({
	name,
	url
}: PokemonProps) => {
	const [pokemonData, setPokemonData] = useState<PokemonData>()

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setPokemonData({
				id: data.id,
				imageUrl: data.sprites.front_default,
				types: data.types
			}))
	}, [url])

	const typeElements = pokemonData?.types.map(type => 
		<div 
			key={type.type.name}
			className='w-28 text-white rounded'
			style={{ backgroundColor: typeColor.get(type.type.name) }}
		>
			<p className='text-xs text-center pb-0.5'>{type.type.name}</p>
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
				<p className='text-xs font-bold text-gray-400'>#{pokemonData?.id.toString().padStart(3, '0')}</p>
				<h1 className='my-1 font-medium text-xl'>{capitalize(name)}</h1>
				<div className='flex gap-1'>
					{typeElements}
				</div>
			</div>
		</div>
	)
}