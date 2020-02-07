import { createAction, handleActions } from 'redux-actions';

const SELECT_NATION = 'product/SELECT_NATION';
const RESET_NATION = 'product/RESET_NATION';
const ADD_ROUTE = 'product/ADD_ROUTE';
const REMOVE_ROUTE = 'product/REMOVE_ROUTE';

export const selectNation = createAction(SELECT_NATION, nationId => nationId);
export const resetNation = createAction(RESET_NATION, nationId => nationId);
export const addRoute = createAction(ADD_ROUTE, route => route);
export const removeRoute = createAction(REMOVE_ROUTE, route => route);

const initialState = {
  nationId: null,
  routes: [],
};

const product = handleActions(
  {
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
  },
  initialState,
);

export default product;
