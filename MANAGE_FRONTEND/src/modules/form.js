import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as formAPI from '../lib/api/form';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE_FORM = 'form/INITIALIZE_FORM';
const SELECT_NATION = 'form/SELECT_NATION';
const RESET_NATION = 'form/RESET_NATION';
const ADD_ROUTE = 'form/ADD_ROUTE';
const REMOVE_ROUTE = 'form/REMOVE_ROUTE';
const SELECT_IMAGE_NATION = 'form/SELECT_IMAGE_NATION';
const SELECT_IMAGE_URL = 'form/SELECT_IMAGE_URL';

const [
  ADD_ROUTE_LIST,
  ADD_ROUTE_LIST_SUCCESS,
  ADD_ROUTE_LIST_FAILURE,
] = createRequestActionTypes('form/ADD_ROUTE_LIST');

const [
  ADD_IMAGES_LIST,
  ADD_IMAGES_LIST_SUCCESS,
  ADD_IMAGES_LIST_FAILURE,
] = createRequestActionTypes('form/ADD_IMAGES_LIST');

export const initializeForm = createAction(INITIALIZE_FORM);
export const selectNation = createAction(SELECT_NATION, nationId => nationId);
export const resetNation = createAction(RESET_NATION, nationId => nationId);
export const addRoute = createAction(ADD_ROUTE, route => route);
export const removeRoute = createAction(REMOVE_ROUTE, route => route);
export const selectImageNation = createAction(
  SELECT_IMAGE_NATION,
  nationId => nationId,
);
export const selectImageUrl = createAction(
  SELECT_IMAGE_URL,
  ({ type, url }) => ({ type, url }),
);

export const addRouteList = createAction(
  ADD_ROUTE_LIST,
  ({ token, routes }) => ({ token, routes }),
);

export const addImagesList = createAction(
  ADD_IMAGES_LIST,
  ({ token, images }) => ({ token, images }),
);

const addRouteListSaga = createRequestSaga(ADD_ROUTE_LIST, formAPI.addRoutes);
const addImagesListSaga = createRequestSaga(ADD_IMAGES_LIST, formAPI.addImages);
export function* formSaga() {
  yield takeLatest(ADD_ROUTE_LIST, addRouteListSaga);
  yield takeLatest(ADD_IMAGES_LIST, addImagesListSaga);
}

const initialState = {
  nationId: null,
  routes: [],
  images: [
    { nation: '', type: 1, url: '' },
    { nation: '', type: 2, url: '' },
    { nation: '', type: 3, url: '' },
    { nation: '', type: 4, url: '' },
  ],
  errors: {
    routes: null,
    images: null,
  },
  completed: {
    routes: false,
    images: false,
  },
};

const form = handleActions(
  {
    [INITIALIZE_FORM]: () => initialState,
    [SELECT_NATION]: (state, { payload: id }) => ({
      ...state,
      nationId: id,
    }),
    [RESET_NATION]: state => ({
      ...state,
      nationId: null,
    }),
    [ADD_ROUTE]: (state, { payload: route }) => {
      let new_routes = state.routes;
      let routeIdx = state.routes.findIndex(
        sroute => sroute.seq === route.seq && sroute.day === route.day,
      );

      // 기존에 있다면 기존껄 바꿔치기합니다.
      if (routeIdx >= 0) {
        new_routes[routeIdx] = route;
      } else {
        new_routes = [...state.routes, route];
      }

      return {
        ...state,
        routes: new_routes,
      };
    },
    [REMOVE_ROUTE]: (state, { payload: route }) => ({
      ...state,
      // 있던걸 필터링해서 날려버립니다
      routes: state.routes.filter(
        sroute => sroute.seq !== route.seq && sroute.day !== route.day,
      ),
    }),
    [SELECT_IMAGE_NATION]: (state, { payload: nationId }) => ({
      ...state,
      images: state.images.map(image => ({ ...image, nation: nationId })),
    }),
    [SELECT_IMAGE_URL]: (state, { payload: { type, url } }) => ({
      ...state,
      images: state.images.map(image =>
        image.type === type ? { ...image, url } : image,
      ),
    }),
    [ADD_ROUTE_LIST_SUCCESS]: state => ({
      ...state,
      completed: {
        ...state.completed,
        routes: true,
      },
      errors: {
        ...state.errors,
        routes: null,
      },
    }),
    [ADD_ROUTE_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errors: {
        ...state.errors,
        images: error,
      },
    }),
    [ADD_IMAGES_LIST_SUCCESS]: state => ({
      ...state,
      completed: {
        ...state.completed,
        images: true,
      },
      errors: {
        ...state.errors,
        images: null,
      },
    }),
    [ADD_IMAGES_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errors: {
        ...state.errors,
        images: error,
      },
    }),
  },
  initialState,
);

export default form;
