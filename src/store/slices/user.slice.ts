import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

interface WithdrawalCount {
  [key: string]: number;
}

export interface userState {
  balance: number;
  isFrozen: boolean;
  withdrawalsCount: Record<number, number>;
}

const initialState: userState = {
  balance: 1000,
  isFrozen: false,
  withdrawalsCount: {}
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
    setWithdrawalsCount: (state, action: PayloadAction<number>) => {
      state.withdrawalsCount = {
        ...state.withdrawalsCount,
        [action.payload]: (state.withdrawalsCount[action.payload] || 0) + 1
      };
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
