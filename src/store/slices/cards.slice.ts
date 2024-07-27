import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
//
import { Card } from 'utils/interfaces';
import { cards } from '../mocks';
import { AppState } from '../store';

interface CardsState {
  cardList: Card[];
}

const initialState: CardsState = {
  cardList: cards
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
