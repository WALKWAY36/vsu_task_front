import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Network, Slice } from '../types';

const initialState: Slice.AnalyzeTextSliceData = {
  data: {
    language: 'undefined',
    entities: {
      persons: [],
      locations: [],
    },
    fuzzy_matched: {
      persons: [],
      locations: [],
    },
  },
  isLoading: false,
  error: null,
};

const analyzeTextSlice = createSlice({
  name: 'analyzeText',
  initialState,
  reducers: {
    analyzeTextStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    analyzeTextSuccess: (state, action: PayloadAction<Network.AnalyzeTextSuccessResponse>) => {
      state.data = { ...state.data, ...action.payload };
      state.isLoading = false;
      state.error = null;
    },
    analyzeTextFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    analyzeTextClearError: (state) => {
      state.error = null;
    },
  },
});

export const { analyzeTextStart, analyzeTextSuccess, analyzeTextFailure, analyzeTextClearError } =
  analyzeTextSlice.actions;
export default analyzeTextSlice.reducer;
