import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMenuSliceState } from './types'

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

export const { setMenuStatus } = menuSlice.actions
export default menuSlice.reducer
