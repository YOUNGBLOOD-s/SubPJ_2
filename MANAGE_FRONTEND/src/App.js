import React from 'react';
import { Route } from 'react-router-dom';
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
        <Route component={MainPage} path="/" exact />
        <Route component={DetailPage} path="/detail/:id" />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        {/* 어드민 */}
        <Route component={AdminPage} path="/admin" />
        {/* 광고주 관리 */}
        <Route component={ManagePage} path="/manage" />
        <Route component={AddProduct} path="/add" />
      </Content>
      <Footer />
    </AppWrapper>
  );
};

export default App;
