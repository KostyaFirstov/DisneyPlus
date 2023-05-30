import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getMoviesFromLS } from '../../utils/getMoviesFromLS'
import { FavoritesItem, IFavoritesState } from './types'

const initialState: IFavoritesState = getMoviesFromLS()

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state, action: PayloadAction<FavoritesItem>) => {
			state.favorites.push(action.payload)
		},
		removeFavorites: (state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(
				item => item.id !== action.payload
			)
		},
		isFavoriteItem: (state, action: PayloadAction<number>) => {
			if (state.favorites.some(item => item.id === action.payload)) {
				state.isFavorite = true
			} else {
				state.isFavorite = false
			}
		},
		clearFavorites: state => {
			state.favorites = []
		}
	}
})

export const { setFavorites, removeFavorites, isFavoriteItem, clearFavorites } =
	favoritesSlice.actions
export default favoritesSlice.reducer
