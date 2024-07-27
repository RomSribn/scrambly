import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { cardsSlice, userSlice, uiSlice, withdrawSlice } from './slices';

const makeStore = () =>
  configureStore({
    reducer: {
      [cardsSlice.name]: cardsSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [uiSlice.name]: uiSlice.reducer,
      [withdrawSlice.name]: withdrawSlice.reducer
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
