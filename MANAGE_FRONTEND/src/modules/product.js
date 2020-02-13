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

const [
  UPDATE_PRODUCT_IMAGE,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
  UPDATE_PRODUCT_IMAGE_FAILURE,
] = createRequestActionTypes('product/UPDATE_PRODUCT_IMAGE');

export const getProduct = createAction(GET_PRODUCT, ({ id, token }) => ({
  id,
  token,
}));
export const updateProductNation = createAction(
  UPDATE_PRODUCT_NATION,
  ({ id, form, token }) => ({ id, form, token }),
);
export const updateProductImage = createAction(
  UPDATE_PRODUCT_IMAGE,
  ({ id, form, token }) => ({ id, form, token }),
);

const getProductSaga = createRequestSaga(GET_PRODUCT, productAPI.productInfo);
const updateProductNationSaga = createRequestSaga(
  UPDATE_PRODUCT_NATION,
  productAPI.updateNation,
);
const updateProductImageSaga = createRequestSaga(
  UPDATE_PRODUCT_IMAGE,
  productAPI.updateImage,
);
export function* productSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
  yield takeLatest(UPDATE_PRODUCT_NATION, updateProductNationSaga);
  yield takeLatest(UPDATE_PRODUCT_IMAGE, updateProductImageSaga);
}

const initialState = {
  product: null,
  error: null,
  updateErrors: {
    nation: null,
    image: null,
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
    [UPDATE_PRODUCT_NATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        ...state.updateErrors,
        nation: error,
      },
    }),
    [UPDATE_PRODUCT_IMAGE_SUCCESS]: (state, { payload: { update } }) => ({
      ...state,
      product: {
        ...state.product,
        images: state.product.images.map(image => {
          if (image.idx === update.idx) {
            return { ...image, ...update };
          }
          return image;
        }),
      },
      updateErrors: {
        ...state.updateErrors,
        image: null,
      },
    }),
    [UPDATE_PRODUCT_IMAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateErrors: {
        image: error,
      },
    }),
  },
  initialState,
);

export default product;
