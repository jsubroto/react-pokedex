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
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(res => res.json())
			.then(data => setPokemonData({
				id: data.id,
				imageUrl: data.sprites.front_default,
				types: data.types
			}))
	}, [name])

	const typeElements = pokemonData?.types.map(type => 
		<div key={type.type.name}>{type.type.name}</div>
	)

	return (
		<div>
			<h1>{name} #{pokemonData?.id}</h1>
			<div>
				{typeElements}
			</div>
			<img src={pokemonData?.imageUrl} alt={name} />
		</div>
	)
}