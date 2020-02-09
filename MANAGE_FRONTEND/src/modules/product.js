import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_PRODUCT = 'product/INITIALIZE_PRODUCT';
const SELECT_NATION = 'product/SELECT_NATION';
const RESET_NATION = 'product/RESET_NATION';
const ADD_ROUTE = 'product/ADD_ROUTE';
const REMOVE_ROUTE = 'product/REMOVE_ROUTE';
const SELECT_IMAGE_NATION = 'product/SELECT_IMAGE_NATION';
const SELECT_IMAGE_URL = 'product/SELECT_IMAGE_URL';

export const initializeProduct = createAction(INITIALIZE_PRODUCT);
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

const initialState = {
  nationId: null,
  routes: [],
  images: [
    { nation: '', type: 1, url: '' },
    { nation: '', type: 2, url: '' },
    { nation: '', type: 3, url: '' },
    { nation: '', type: 4, url: '' },
  ],
};

const product = handleActions(
  {
    [INITIALIZE_PRODUCT]: () => initialState,
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
  },
  initialState,
);

export default product;
