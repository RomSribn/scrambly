import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import httpClient from 'services/http';
import { CardType } from 'utils/interfaces';
import { AppState } from '../store';

export interface GetWithdrawSuccessRequest {
  price: number;
  type: CardType;
}

export const getWithdrawSuccess = createAsyncThunk(
  'withdraw/Success',
  async ({ price, type }: GetWithdrawSuccessRequest) => {
    const response = await httpClient.get('/withdraw', { params: { price, type } });
    return response.data;
  }
);

interface WithdrawState {
  selectedCardId: number | null;
  amount: number;
  bonus: number;
  commission: number;
  error: SerializedError | null;
  status: string | null;
  loading: boolean;
}

const initialState: WithdrawState = {
  selectedCardId: null,
  amount: 0,
  bonus: 0,
  commission: 0,
  error: null,
  status: null,
  loading: false
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
      state.loading = false;
    });
    builder.addCase(getWithdrawSuccess.pending, (state) => {
      state.status = 'Withdrawing…';
      state.loading = true;
    });
    builder.addCase(getWithdrawSuccess.rejected, (state, action) => {
      state.status = action.error.message || 'An error occurred';
      state.error = action.error;
      state.loading = false;
    });
  }
});

export const { setSelectedCardId, setAmount, setBonus, setCommission } = withdrawSlice.actions;

export const selectWithdrawState = (state: AppState) => state.withdraw;

export default withdrawSlice.reducer;
