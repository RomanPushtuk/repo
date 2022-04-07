import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './slices/sliceWeather';

export const getRootReducer = (reducers = {}) =>
  combineReducers({
    weather: weatherReducer,
    ...reducers,
  });
