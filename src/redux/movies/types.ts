import { IMovie } from '../../pages/Movies'

export type FetchMoviesParams = {
	currentPage: number
	category: string
	sortBy: string
	order: string
	search: string
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

export interface IMovieState {
	items: IMovie[]
	similar: IMovie[]
	status: Status
}
