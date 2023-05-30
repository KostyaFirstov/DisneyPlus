import { RootState } from '../store'

export const selectPage = (state: RootState) => state.filter.currentPage
export const selectSearch = (state: RootState) => state.filter.searchValue
export const selectSort = (state: RootState) => state.filter.sortBy
export const selectCategory = (state: RootState) => state.filter.category
