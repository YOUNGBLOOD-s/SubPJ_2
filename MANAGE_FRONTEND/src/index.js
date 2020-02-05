import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules';
import { rootSaga } from './modules/index';
import { tempSetUser, check } from './modules/user';
import dotenv from 'dotenv';
dotenv.config();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// 초기에 유저를 가져오는 함수
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    const token = sessionStorage.getItem('access_token');
    store.dispatch(check(token));
  } catch (e) {
    console.log('로컬스토리지가 정상 동작하지 않습니다.');
  }
}

// 카카오 인스턴스 초기화 함수
function initKakao() {
  window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
}

sagaMiddleware.run(rootSaga);
loadUser();
initKakao();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
