import calculatedFieldReducer from './slices/calculated-field-slice'
import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from './slices/survey-slice'

export const store = configureStore( {
	reducer: {
		calculatedField: calculatedFieldReducer,
		survey: surveyReducer,
	},
} )
