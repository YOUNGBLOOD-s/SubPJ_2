import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adsAPI from '../lib/api/ad';

const [
  LIST_ADS,
  LIST_ADS_SUCCESS,
  LIST_ADS_FAILURE,
] = createRequestActionTypes('ads/LIST_ADS', ({ token, page }) => ({
  token,
  page,
}));

export const listAds = createAction(LIST_ADS);

const listAdsSaga = createRequestSaga(LIST_ADS, adsAPI.adlist);
export function* adsSaga() {
  yield takeLatest(LIST_ADS, listAdsSaga);
}

const initialState = {
  ads: null,
  error: null,
};

const ads = handleActions(
  {
    [LIST_ADS_SUCCESS]: (state, { payload: ads }) => ({
      ...state,
      ads: ads.resvalue,
    }),
    [LIST_ADS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default ads;
