export type PokemonProps = {
	name: string
	url: string
}

export type PokemonData = {
	id: number
	imageUrl: string
	types: { type: { name: string } }[]
}
