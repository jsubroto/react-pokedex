import { useEffect } from "react";
import { PokemonProps } from "../types";

export const Pokemon = ({
	name,
	url
}: PokemonProps) => {
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(res => res.json())
			.then(data => console.log(data))
	}, [name])

	return (
		<li>{name}</li>
	)
}