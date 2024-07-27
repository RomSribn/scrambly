import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

interface UiState {
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

const initialState: UiState = {
  isLoading: false,
  errorMessage: null,
  successMessage: null
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    }
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(HYDRATE, (state: any, action: { payload: { app: any } }) => ({
      ...state,
      ...action.payload.app
    }));
  }
});

export const { setIsLoading, setErrorMessage, setSuccessMessage } = uiSlice.actions;
export const selectUiState = (state: AppState) => state.ui;

export default uiSlice.reducer;
