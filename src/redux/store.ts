import { configureStore } from '@reduxjs/toolkit'
import filter from './filterSlice'
import { useDispatch } from 'react-redux'
import movies from './moviesSlice'
import favorites from './favoritesSlice'

const store = configureStore({
	reducer: {
		filter,
		movies,
		favorites
	}
})

export type RootState = ReturnType<typeof store.getState>
export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
