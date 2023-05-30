import { RootState } from '../store'

export const selectFavorites = (state: RootState) => state.favorites.favorites
export const selectIsFavorite = (state: RootState) => state.favorites.isFavorite
