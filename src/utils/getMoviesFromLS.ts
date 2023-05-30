import React from 'react'
import { FavoritesItem } from '../redux/favorites/types'

export const getMoviesFromLS = () => {
	const data = localStorage.getItem('movies')
	const movies = data ? JSON.parse(data) : []

	return {
		favorites: movies as FavoritesItem[],
		isFavorite: false
	}
}
