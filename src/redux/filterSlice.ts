import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type SortType = { name: string; sortValue: string }

interface IFilterSliceState {
	searchValue: string
	category: number
	sortBy: SortType
	currentPage: number
}

const initialState: IFilterSliceState = {
	searchValue: '',
	category: 0,
	sortBy: { name: 'Популярности DESC', sortValue: 'popularity' },
	currentPage: 1
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSortValue: (state, action: PayloadAction<SortType>) => {
			state.sortBy = action.payload
		},
		setCategoryValue: (state, action: PayloadAction<number>) => {
			state.category = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		}
	}
})

export const selectPage = (state: RootState) => state.filter.currentPage
export const selectSearch = (state: RootState) => state.filter.searchValue
export const selectSort = (state: RootState) => state.filter.sortBy
export const selectCategory = (state: RootState) => state.filter.category

export const {
	setSortValue,
	setCategoryValue,
	setSearchValue,
	setCurrentPage
} = filterSlice.actions
export default filterSlice.reducer
