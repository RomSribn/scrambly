import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

interface Card {
  id: string;
  type: 'visa' | 'amazon';
  amount: number;
  bonus?: number;
  commission?: number;
}

interface CardsState {
  cardList: Card[];
}

const initialState: CardsState = {
  cardList: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(HYDRATE, (state: any, action: { payload: { app: any } }) => ({
      ...state,
      ...action.payload.app
    }));
  }
});

export const selectCardsState = (state: AppState) => state.cards;

export default cardsSlice.reducer;
