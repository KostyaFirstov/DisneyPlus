export type SortType = { name: string; sortValue: string }

export interface IFilterSliceState {
	searchValue: string
	category: number
	sortBy: SortType
	currentPage: number
}
