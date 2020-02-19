import React from 'react';
import MyProducts from '../components/manage/productManage/MyProducts/MyProducts';
import { Route } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import MyPageAdmin from '../components/manage/MyPage/MyPageAdmin';
import { Helmet } from 'react-helmet-async';
import AddProduct from '../components/manage/productManage/AddProduct/AddProduct';

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>관리자패널 - NEARBY AD</title>
      </Helmet>
      <Route component={MyProducts} path="/management" exact />
      <Route component={ProductDetail} path="/management/product/:id" />
      <Route component={MyPageAdmin} path="/management/users" />
      <Route component={AddProduct} path="/management/add" exact />
    </>
  );
};

export default AdminPage;
