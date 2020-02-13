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

const [
  UPDATE_PRODUCT_NATION,
  UPDATE_PRODUCT_NATION_SUCCESS,
  UPDATE_PRODUCT_NATION_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_NATION');

export const getProduct = createAction(GET_PRODUCT, ({ id, token }) => ({
  id,
  token,
}));
export const updateProductNation = createAction(
  UPDATE_PRODUCT_NATION,
  ({ id, form, token }) => ({ id, form, token }),
);

const getProductSaga = createRequestSaga(GET_PRODUCT, productAPI.productInfo);
const updateProductNationSaga = createRequestSaga(
  UPDATE_PRODUCT_NATION,
  productAPI.updateNation,
);
export function* productSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
  yield takeLatest(UPDATE_PRODUCT_NATION, updateProductNationSaga);
}

const initialState = {
  product: null,
  error: null,
  updateErrors: {
    nation: null,
    images: null,
    contents: null,
    month: null,
  },
};

const product = handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
      error: null,
    }),
    [GET_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      product: null,
      error,
    }),
    [UPDATE_PRODUCT_NATION_SUCCESS]: (
      state,
      { payload: { updateNation } },
    ) => ({
      ...state,
      product: {
        ...state.product,
        nation: {
          ...state.product.nation,
          ...updateNation,
        },
      },
      updateErrors: {
        ...state.updateErrors,
        nation: null,
      },
    }),
    [UPDATE_PRODUCT_NATION_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        updateErrors: {
          ...state.updateErrors,
          nation: error,
        },
      };
    },
  },
  initialState,
);

export default product;
