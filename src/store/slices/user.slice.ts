import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface userState {
  balance: number;
  isFrozen: boolean;
  withdrawalsCount: number;
}

const initialState: userState = {
  balance: 0,
  isFrozen: false,
  withdrawalsCount: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setIsFrozen: (state, action) => {
      state.isFrozen = action.payload;
    },
    setWithdrawalsCount: (state, action) => {
      state.withdrawalsCount = action.payload;
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

export const { setBalance, setIsFrozen, setWithdrawalsCount } = userSlice.actions;
export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;
