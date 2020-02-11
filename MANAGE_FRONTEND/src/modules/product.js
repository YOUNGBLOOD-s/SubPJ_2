import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as productAPI from '../lib/api/product';
import { takeLatest } from 'redux-saga/effects';

const [
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
] = createRequestActionTypes('product/GET_PRODUCT');

export const getProduct = createAction(GET_PRODUCT, ({ id, token }) => ({
  id,
  token,
}));

const getProductSaga = createRequestSaga(GET_PRODUCT, productAPI.productInfo);
export function* productSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
}

const initialState = {
  product: null,
  error: null,
};

const product = handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      product: data,
      error: null,
    }),
    [GET_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      product: null,
      error,
    }),
  },
  initialState,
);

export default product;
