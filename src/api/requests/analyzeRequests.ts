import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { analyzeTextFailure, analyzeTextStart, analyzeTextSuccess } from '../../slices';
import { RootState } from '../../store';
import { Network } from '../../types';
import { axiosInstance } from '../axiosInstance';

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const fetchAnalyzeText = (text: string): AppThunk => {
  return async (dispatch) => {
    dispatch(analyzeTextStart());
    try {
      const requestBody = { text };
      const response = await axiosInstance.post<Network.AnalyzeTextSuccessResponse>('/analyze_text', requestBody);
      dispatch(analyzeTextSuccess(response.data));
    } catch (error: any) {
      dispatch(
        analyzeTextFailure(
          error instanceof AxiosError ? error.response?.data.message : 'Произошла необработанная ошибка'
        )
      );
    }
  };
};

export { fetchAnalyzeText };
