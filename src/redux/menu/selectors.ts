import { RootState } from '../store'

export const selectMenuStatus = (state: RootState) => state.menu.status
