import { RootState } from '../store'

export const selectStatus = (state: RootState) => state.movies.status
export const selectMovies = (state: RootState) => state.movies.items
export const selectSimilars = (state: RootState) => state.movies.similar
