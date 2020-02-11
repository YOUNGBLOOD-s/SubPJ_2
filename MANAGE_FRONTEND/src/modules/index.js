import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import stepper from './stepper';
import ads, { adsSaga } from './ads';
import form from './form';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  stepper,
  form,
  ads,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), adsSaga()]);
}

export default rootReducer;
