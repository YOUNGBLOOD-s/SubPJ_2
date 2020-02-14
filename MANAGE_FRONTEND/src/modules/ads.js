import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as adsAPI from '../lib/api/ad';

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
export const allAdList = createAction(ALL_AD_LIST);

const userAdListSaga = createRequestSaga(USER_AD_LIST, adsAPI.userAdList);
const allAdListSaga = createRequestSaga(ALL_AD_LIST, adsAPI.allAdList);
export function* adsSaga() {
  yield takeLatest(USER_AD_LIST, userAdListSaga);
  yield takeLatest(ALL_AD_LIST, allAdListSaga);
}

const initialState = {
  ads: null,
  error: null,
};

const ads = handleActions(
  {
    [USER_AD_LIST_SUCCESS]: (state, { payload: ads }) => ({
      ...state,
      ads: ads.resvalue,
    }),
    [USER_AD_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ALL_AD_LIST_SUCCESS]: (state, { payload: { AllNationDatas } }) => ({
      ...state,
      ads: AllNationDatas,
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
