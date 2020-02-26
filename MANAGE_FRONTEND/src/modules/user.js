import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';
const [
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
] = createRequestActionTypes('user/GET_CURRENT_USER');

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const getCurrentUser = createAction(GET_CURRENT_USER, token => token);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const getCurrentUserSaga = createRequestSaga(
  GET_CURRENT_USER,
  authAPI.getCurrentUser,
);
function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('로컬 스토리지가 정상 동작하지 않습니다.');
  }
}
function logoutSaga() {
  try {
    localStorage.removeItem('user');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('expiration_time');
  } catch (e) {
    console.log(e);
  }
}
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_CURRENT_USER, getCurrentUserSaga);
}

const initialState = {
  user: null,
  checkError: null,
  member: null,
  getError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
    [GET_CURRENT_USER_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      member: data,
      getError: null,
    }),
    [GET_CURRENT_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      member: null,
      getError: error,
    }),
  },
  initialState,
);
