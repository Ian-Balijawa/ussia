import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    englishLevel: null,
    technicalAnalysis: null,
    workableWith: null
  },
  status: 'idle'
};

export const surveySlice = createSlice( {
  name: 'Survey',
  initialState,
  reducers: {
    setEnglishLevel: ( state, action ) => {
      state.value.englishLevel = action.payload;
    },
    setTechnicalAnalysis: ( state, action ) => {
      state.value.technicalAnalysis = action.payload;
    },
    setWorkableWith: ( state, action ) => {
      state.value.workableWith = action.payload;
    },
    submit: ( state, action ) => {
      const { payload } = action;
      const value = state;
      alert( JSON.stringify( { value, ...payload }, null, 2 ) );
    }
  }
} );

export const {
  setEnglishLevel,
  setTechnicalAnalysis,
  setWorkableWith,
  submit
} = surveySlice.actions;

export const selectEnglishLevel = ( state ) =>
  state.survey.value.englishLevel;
export const selectTechnicalAnalysis = ( state ) =>
  state.survey.value.technicalAnalysis;
export const selectWorkableWith = ( state ) =>
  state.survey.value.workableWith;

export default surveySlice.reducer;
