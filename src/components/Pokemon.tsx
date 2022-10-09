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

	return (
		<li>{name} {pokemonData?.id}: {pokemonData?.types.map(type => type.type.name).join(', ')}</li>
	)
}