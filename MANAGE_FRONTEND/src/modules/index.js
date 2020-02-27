import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import stepper from './stepper';
import ads, { adsSaga } from './ads';
import form, { formSaga } from './form';
import product, { productSaga } from './product';
import qr, { qrSaga } from './qr';
import manager, { managerSaga } from './manager';
import statistical, { statisticalSaga } from './statistical';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  stepper,
  form,
  ads,
  product,
  qr,
  manager,
  statistical,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    adsSaga(),
    productSaga(),
    qrSaga(),
    formSaga(),
    managerSaga(),
    statisticalSaga(),
  ]);
}

export default rootReducer;
