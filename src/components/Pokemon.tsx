import { useEffect, useState } from "react";
import { PokemonProps } from "../types";

type PokemonData = {
	id: number
	imageUrl: string
	types: { type: { name: string } }[]
}

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
		<div key={type.type.name}>{type.type.name}</div>
	)

	return (
		<div>
			<img
				className='w-full bg-gray-100 rounded' 
				src={pokemonData?.imageUrl} 
				alt={name} 
			/>
			<div className='mx-2 mb-10'>
				<p className='text-xs font-bold text-gray-400'>#{pokemonData?.id.toString().padStart(3, '0')}</p>
				<h1 className='mt-2 font-medium text-xl'>{name}</h1>
				<div>
					{typeElements}
				</div>
			</div>
		</div>
	)
}