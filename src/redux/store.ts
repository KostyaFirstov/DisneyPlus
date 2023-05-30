import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filter from './filter/slice'
import movies from './movies/slice'
import favorites from './favorites/slice'
import menu from './menu/slice'

const store = configureStore({
	reducer: {
		filter,
		movies,
		favorites,
		menu,
	}
})

export type RootState = ReturnType<typeof store.getState>
export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
