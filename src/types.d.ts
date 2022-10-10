export type PokemonProps = {
	name: string
	url: string
}

export type PokemonData = {
	id: number
	imageUrl: string
	types: string[]
}

export type PaginationProps = {
	handleClick: Function
	prevUrl: string
	nextUrl: string
}
