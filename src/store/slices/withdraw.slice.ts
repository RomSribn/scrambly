import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';
import httpClient from 'services/http';

export const getWithdrawSuccess = createAsyncThunk('withdraw/Success', async () => {
  const response = await httpClient('/withdraw');
  return response.data;
});

interface WithdrawState {
  selectedCardId: string | null;
  amount: number;
  bonus: number;
  commission: number;
  error: SerializedError | null;
  status: string | null;
}

const initialState: WithdrawState = {
  selectedCardId: null,
  amount: 0,
  bonus: 0,
  commission: 0,
  error: null,
  status: null
};

export const withdrawSlice = createSlice({
  name: 'withdraw',
  initialState,
  reducers: {
    setSelectedCardId(state, action) {
      state.selectedCardId = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setBonus(state, action) {
      state.bonus = action.payload;
    },
    setCommission(state, action) {
      state.commission = action.payload;
    }
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(HYDRATE, (state: any, action: { payload: { app: any } }) => ({
      ...state,
      ...action.payload.app
    }));
    builder.addCase(getWithdrawSuccess.fulfilled, (state, action) => {
      state.status = null;
    });
    builder.addCase(getWithdrawSuccess.pending, (state) => {
      state.status = 'Please wait a moment…';
    });
    builder.addCase(getWithdrawSuccess.rejected, (state, action) => {
      state.status = action.error.message || 'An error occurred';
      state.error = action.error;
    });
  }
});

export const { setSelectedCardId, setAmount, setBonus, setCommission } = withdrawSlice.actions;

export const selectWithdrawState = (state: AppState) => state.withdraw;

export default withdrawSlice.reducer;
