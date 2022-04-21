import { takeEvery, call, put } from 'redux-saga/effects';
import { getWeather } from '@repo/request-module';
import { ApiInstance, AxiosInstance } from '@repo/api-module';
import { pending, fulfilled } from '../slices/sliceWeather';

const workWeatherFetch = (instance: AxiosInstance) => {
  return function* (): any {
    const weather = yield call(() =>
      getWeather(instance).then((res: any) => res.data),
    );
    yield put(fulfilled(weather));
  };
};

export const RootSaga = (api: ApiInstance) => {
  const instance = api.getInstance();

  return function* () {
    yield takeEvery(pending, workWeatherFetch(instance));
  };
};
