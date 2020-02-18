import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adsAPI from '../lib/api/ad';

const INITILIZE_ADS = 'ads/INITILIZE_ADS';

const [
  USER_AD_LIST,
  USER_AD_LIST_SUCCESS,
  USER_AD_LIST_FAILURE,
] = createRequestActionTypes('ads/USER_AD_LIST', ({ token, page }) => ({
  token,
  page,
}));

const [
  ALL_AD_LIST,
  ALL_AD_LIST_SUCCESS,
  ALL_AD_LIST_FAILURE,
] = createRequestActionTypes('ads/ALL_AD_LIST', ({ page, filter }) => ({
  page,
  filter,
}));

export const userAdList = createAction(USER_AD_LIST);
export const initilizeAds = createAction(INITILIZE_ADS);
export const allAdList = createAction(ALL_AD_LIST);

const userAdListSaga = createRequestSaga(USER_AD_LIST, adsAPI.userAdList);
const allAdListSaga = createRequestSaga(ALL_AD_LIST, adsAPI.allAdList);
export function* adsSaga() {
  yield takeLatest(USER_AD_LIST, userAdListSaga);
  yield takeLatest(ALL_AD_LIST, allAdListSaga);
}

const initialState = {
  user_ads: null,
  user_ads_lastpage: 0,
  all_ads: null,
  all_ads_lastpage: 0,
  error: null,
};

const ads = handleActions(
  {
    [INITILIZE_ADS]: () => initialState,
    [USER_AD_LIST_SUCCESS]: (
      state,
      { payload: { resvalue, lastpageidx } },
    ) => ({
      ...state,
      user_ads: resvalue,
      user_ads_lastpage: lastpageidx,
    }),
    [USER_AD_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ALL_AD_LIST_SUCCESS]: (
      state,
      { payload: { AllNationDatas, lastpageidx } },
    ) => ({
      ...state,
      all_ads: AllNationDatas,
      all_ads_lastpage: lastpageidx,
      error: null,
    }),
    [ALL_AD_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default ads;
