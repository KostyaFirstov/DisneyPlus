import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IMovie } from '../../pages/Movies'
import { FetchMoviesParams, IMovieState, Status } from './types'

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

const initialState: IMovieState = {
	items: [],
	similar: [],
	status: Status.LOADING
}

export const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		filterOnSimilar: (state, action: PayloadAction<number>) => {
			state.similar = state.items.filter(item => item.id !== action.payload)
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchMoviesData.pending, state => {
			state.items = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchMoviesData.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchMoviesData.rejected, state => {
			state.items = []
			state.status = Status.ERROR
		})
	}
})

export const { filterOnSimilar } = movieSlice.actions
export default movieSlice.reducer
