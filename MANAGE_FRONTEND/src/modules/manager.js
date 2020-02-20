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

export const getManagerInfo = createAction(GET_MANAGER_INFO, token => token);

const getManagerInfoSaga = createRequestSaga(
  GET_MANAGER_INFO,
  managerAPI.getManagerInfo,
);
export function* managerSaga() {
  yield takeLatest(GET_MANAGER_INFO, getManagerInfoSaga);
}

const initialState = {
  broadcastNumber: null,
  broadcastNumberError: null,
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
  },
  initialState,
);

export default manager;
