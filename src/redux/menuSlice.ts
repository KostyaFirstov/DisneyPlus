import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type SortType = { name: string; sortValue: string }

interface IMenuSliceState {
	status: boolean
}

const initialState: IMenuSliceState = {
	status: false
}

export const menuSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		setMenuStatus: (state, action: PayloadAction<boolean>) => {
			state.status = action.payload
		}
	}
})

export const selectMenuStatus = (state: RootState) => state.menu.status

export const { setMenuStatus } = menuSlice.actions
export default menuSlice.reducer
