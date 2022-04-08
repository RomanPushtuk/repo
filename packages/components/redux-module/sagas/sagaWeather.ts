import { takeEvery, call, put } from 'redux-saga/effects';
import { getWeather } from '@repo/request-module';
import { pending, fulfilled } from '../slices/sliceWeather';

function* workWeatherFetch(): any {
  const weather = yield call(() => getWeather().then((res) => res.data));
  yield put(fulfilled(weather));
}

export function* RootSaga() {
  yield takeEvery(pending, workWeatherFetch);
}
