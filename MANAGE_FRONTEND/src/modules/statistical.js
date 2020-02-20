import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as statisticalAPI from '../lib/api/statistical';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [
  GET_STATISTICAL,
  GET_STATISTICAL_SUCCESS,
  GET_STATISTICAL_FAILURE,
] = createRequestActionTypes('manager/GET_STATISTICAL');

export const getStatistical = createAction(
  GET_STATISTICAL,
  ({ token, nationIdx, dayType }) => ({ token, nationIdx, dayType }),
);

const getStatisticalSaga = createRequestSaga(
  GET_STATISTICAL,
  statisticalAPI.getStat,
);
export function* statisticalSaga() {
  yield takeLatest(GET_STATISTICAL, getStatisticalSaga);
}

const initialState = {
  statistical: null,
  statisticalError: null,
};

const manager = handleActions(
  {
    [GET_STATISTICAL_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      statistical: data,
      statisticalError: null,
    }),
    [GET_STATISTICAL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      statistical: null,
      statisticalError: error,
    }),
  },
  initialState,
);

export default manager;
