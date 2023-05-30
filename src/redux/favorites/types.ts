export type FavoritesItem = {
	id: number
	title: string
	cardImg: string
}

export interface IFavoritesState {
	favorites: FavoritesItem[]
	isFavorite: boolean
}
