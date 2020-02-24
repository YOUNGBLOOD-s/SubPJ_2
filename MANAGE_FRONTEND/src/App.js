import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import Footer from './components/common/Footer';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import NotFound from './pages/NotFound';
import ManagementPage from './pages/ManagementPage';

const AppWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
          <Route component={ManagementPage} path="/management" />
          <Route component={NotFound} />
        </Switch>
      </Content>
      <Footer />
    </AppWrapper>
  );
};

export default App;
