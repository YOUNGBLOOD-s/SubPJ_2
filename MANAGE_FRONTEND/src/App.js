import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import DetailPage from './pages/DetailPage';
import ManagePage from './pages/ManagePage';
import AddProduct from './components/manage/productManage/AddProduct/AddProduct';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={DetailPage} path="/detail/:id" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      {/* 어드민 */}
      <Route component={AdminPage} path="/admin" />
      {/* 광고주 관리 */}
      <Route component={ManagePage} path="/manage" />
      <Route component={AddProduct} path="/add" />
    </>
  );
};

export default App;
