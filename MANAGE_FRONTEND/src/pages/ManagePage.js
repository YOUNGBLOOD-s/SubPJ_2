import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import MyPage from '../components/manage/MyPage/MyPage';
import GradeDetail from '../components/manage/gradePurchase/GradeDetail';
import ProductManage from '../components/manage/productManage/ProductManage';
import ProductDetail from '../components/product/ProductDetail';
import AddProduct from '../components/manage/productManage/AddProduct/AddProduct';

const ManagePage = () => {
  return (
    <>
      <Helmet>
        <title>광고관리 - NEARBY AD</title>
      </Helmet>
      {/* 이하 grade === 0 이면, /grade로 이동시키기  */}
      <Route component={MyPage} path="/management" exact />
      <Route component={GradeDetail} path="/management/grade" exact />
      <Route component={AddProduct} path="/management/add" exact />
      <Route component={ProductManage} path="/management/product" exact />
      <Route component={ProductDetail} path="/management/product/:id" />
    </>
  );
};

export default ManagePage;
