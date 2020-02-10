import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import stepper from './stepper';
import product from './product';
import ads, { adsSaga } from './ads';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  stepper,
  product,
  ads,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), adsSaga()]);
}

export default rootReducer;
