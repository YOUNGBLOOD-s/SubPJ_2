import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as qrAPI from '../lib/api/qr';
import { takeLatest } from 'redux-saga/effects';

const [
  GET_QR_DETAIL,
  GET_QR_DETAIL_SUCCESS,
  GET_QR_DETAIL_FAILURE,
] = createRequestActionTypes('qr/GET_QR_DETAIL');

const [
  INCREASE_QR_VIEW,
  INCREASE_QR_VIEW_SUCCESS,
  INCREASE_QR_VIEW_FAILURE,
] = createRequestActionTypes('qr/INCREASE_QR_VIEW');

export const getQrDetail = createAction(GET_QR_DETAIL, ({ id }) => ({ id }));
export const increaseQrView = createAction(INCREASE_QR_VIEW, ({ id }) => ({
  id,
}));

const getQrDetailSaga = createRequestSaga(GET_QR_DETAIL, qrAPI.getQrDetail);
const increaseQrViewSaga = createRequestSaga(
  increaseQrView,
  qrAPI.increaseQrView,
);
export function* qrSaga() {
  yield takeLatest(GET_QR_DETAIL, getQrDetailSaga);
  yield takeLatest(INCREASE_QR_VIEW, increaseQrViewSaga);
}

const initialState = {
  nation: null,
  error: null,
};

const qr = handleActions(
  {
    [GET_QR_DETAIL_SUCCESS]: (state, { payload: nation }) => ({
      ...state,
      nation,
      error: null,
    }),
    [GET_QR_DETAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INCREASE_QR_VIEW_SUCCESS]: state => ({ ...state }),
    [INCREASE_QR_VIEW_FAILURE]: state => ({ ...state }),
  },
  initialState,
);

export default qr;
