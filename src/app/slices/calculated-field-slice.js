import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

const initialState = {
	value: {
		sheepCount: 0,
		goatCount: 0,
		total: 0,
	},
	status: 'idle',
}

export const calculatedFieldSlice = createSlice( {
	name: 'CalculatedField',
	initialState,
	reducers: {
		calculateTotal: state => {
			state.value.total = state.value.sheepCount + state.value.goatCount
		},
		setNumberOfSheep: ( state, action ) => {
			const num = !Number.isNaN( action.payload ) ? Number( action.payload ) : 0
			state.value.sheepCount = num
		},
		setNumberOfGoats: ( state, action ) => {
			const num = !Number.isNaN( action.payload ) ? Number( action.payload ) : 0
			state.value.goatCount = num
		},
		submit: ( state, action ) => {
			const { payload } = action
			alert( JSON.stringify( { payload }, null, 2 ) )
		},
	},
} )

export const { calculateTotal, submit, setNumberOfGoats, setNumberOfSheep } = calculatedFieldSlice.actions

export const selectSheepCount = ( state ) => state.calculatedField.value.sheepCount
export const selectGoatCount = ( state ) => state.calculatedField.value.goatCount
export const selectTotal = ( state ) => state.calculatedField.value.total

export default calculatedFieldSlice.reducer
