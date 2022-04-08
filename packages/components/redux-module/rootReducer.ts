import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './slices/sliceWeather';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
