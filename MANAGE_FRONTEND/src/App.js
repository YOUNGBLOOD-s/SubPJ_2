import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import DetailPage from './pages/DetailPage';
import ManagePage from './pages/ManagePage';
import AddProduct from './components/manage/productManage/AddProduct/AddProduct';
import Footer from './components/common/Footer';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import NotFound from './pages/NotFound';

const AppWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const App = () => {
  return (
    <AppWrapper>
      <Helmet>
        <title>네곁에 - NEARBY AD</title>
      </Helmet>
      <Content>
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={DetailPage} path="/detail/:id" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={RegisterPage} path="/register" exact />
          {/* 어드민 */}
          <Route component={AdminPage} path="/admin" />
          {/* 광고주 관리 */}
          <Route component={ManagePage} path="/manage" />
          <Route component={AddProduct} path="/add" exact />
          <Route component={NotFound} />
        </Switch>
      </Content>
      <Footer />
    </AppWrapper>
  );
};

export default App;
