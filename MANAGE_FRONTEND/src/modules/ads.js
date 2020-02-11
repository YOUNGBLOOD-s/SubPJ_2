import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adsAPI from '../lib/api/ad';

const [LIST_ADS, LIST_ADS_SUCCESS, LIST_ADS_FAILURE] = createRequestActionTypes(
  'ads/LIST_ADS',
  token => token,
);

const REMOVE_AD = 'ads/REMOVE_AD';

export const listAds = createAction(LIST_ADS);
export const removeAd = createAction(REMOVE_AD, idx => idx);

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
    [REMOVE_AD]: (state, { payload: idx }) => ({
      ...state,
      ads: state.ads.filter(ad => ad.idx !== idx),
    }),
  },
  initialState,
);

export default ads;
