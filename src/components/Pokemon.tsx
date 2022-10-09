import { PokemonProps } from "../types";

export const Pokemon = ({
	name,
	url
}: PokemonProps) => {
	return (
		<li>{name}</li>
	)
}