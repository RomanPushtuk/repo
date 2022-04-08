import { combineReducers } from '@reduxjs/toolkit';
import { reducer } from './slices/sliceWeather';

export const rootReducer = combineReducers({
  weather: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
