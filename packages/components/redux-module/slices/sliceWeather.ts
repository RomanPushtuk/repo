import { createSlice } from '@reduxjs/toolkit';

const IDLE = 'IDLE';
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

type Status = typeof IDLE | typeof PENDING | typeof FULFILLED | typeof REJECTED;

type WeatherState = {
  status: Status;
  data: null | any;
};

const initialState: WeatherState = {
  status: IDLE,
  data: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    pending(state) {
      state.status = PENDING;
    },
    fulfilled(state, action) {
      state.status = FULFILLED;
      state.data = action.payload;
    },
    rejected(state) {
      state.status = REJECTED;
      state.data = { text: "Can't get weather data. Sorry :((" };
    },
  },
});

export const { reducer } = weatherSlice;
export const { pending, fulfilled, rejected } = weatherSlice.actions;
