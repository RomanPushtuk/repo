import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../thunks/fetchWeather';

type WeatherState = {
  data: null | any;
};

const initialState: WeatherState = {
  data: null,
};

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.pending.type]: () => {},
    [fetchWeather.fulfilled.type]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    },
    [fetchWeather.rejected.type]: (state) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      state.data = { text: "Can't get weather data. Sorry :((" };
    },
  },
});

export default counterSlice.reducer;
