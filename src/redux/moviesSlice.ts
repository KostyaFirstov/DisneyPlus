import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import axios from 'axios'
import { IMovie } from '../pages/Movies'
import { SortType } from './filterSlice'

type FetchMoviesParams = {
	currentPage: number
	category: string
	sortBy: string
	order: string
	search: string
}

export const fetchMoviesData = createAsyncThunk<IMovie[], FetchMoviesParams>(
	'users/fetchMoviesData',
	async params => {
		const { sortBy, order, category, currentPage, search } = params
		const { data } = await axios.get<IMovie[]>(
			`https://64672b8aba7110b663b11c76.mockapi.io/Movies?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
		)

		return data
	}
)

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface IMovieState {
	items: IMovie[]
	status: Status
}

const initialState: IMovieState = {
	items: [],
	status: Status.LOADING
}

export const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchMoviesData.pending, (state, action) => {
			state.items = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchMoviesData.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchMoviesData.rejected, (state, action) => {
			state.items = []
			state.status = Status.ERROR
		})
	}
})

export const selectStatus = (state: RootState) => state.movies.status
export const selectMovies = (state: RootState) => state.movies.items

export const {} = movieSlice.actions
export default movieSlice.reducer
