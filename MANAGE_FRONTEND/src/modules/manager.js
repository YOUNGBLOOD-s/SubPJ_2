import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as managerAPI from '../lib/api/manager';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [
  GET_MANAGER_INFO,
  GET_MANAGER_INFO_SUCCESS,
  GET_MANAGER_INFO_FAILURE,
] = createRequestActionTypes('manager/GET_MANAGER_INFO');

const [
  UPDATE_MANAGER_INFO,
  UPDATE_MANAGER_INFO_SUCCESS,
  UPDATE_MANAGER_INFO_FAILURE,
] = createRequestActionTypes('manager/UPDATE_MANAGER_INFO');

export const getManagerInfo = createAction(GET_MANAGER_INFO, token => token);
export const updateManagerInfo = createAction(
  UPDATE_MANAGER_INFO,
  ({ token, broadcastAdNumber }) => ({ token, broadcastAdNumber }),
);

const getManagerInfoSaga = createRequestSaga(
  GET_MANAGER_INFO,
  managerAPI.getManagerInfo,
);

const updateManagerInfoSaga = createRequestSaga(
  UPDATE_MANAGER_INFO,
  managerAPI.updateManagerInfo,
);
export function* managerSaga() {
  yield takeLatest(GET_MANAGER_INFO, getManagerInfoSaga);
  yield takeLatest(UPDATE_MANAGER_INFO, updateManagerInfoSaga);
}

const initialState = {
  broadcastNumber: null,
  broadcastNumberError: null,
  updateError: null,
};

const manager = handleActions(
  {
    [GET_MANAGER_INFO_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      broadcastNumber: data.resvalue,
      broadcastNumberError: null,
    }),
    [GET_MANAGER_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      broadcastNumber: null,
      broadcastNumberError: error,
    }),
    [UPDATE_MANAGER_INFO_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      updateError: null,
    }),
    [UPDATE_MANAGER_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateError: error,
    }),
  },
  initialState,
);

export default manager;
