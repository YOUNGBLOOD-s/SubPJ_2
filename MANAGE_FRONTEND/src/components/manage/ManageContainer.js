import React from 'react';
import ProductManage from './productManage/ProductManage';
import MyPage from './MyPage/MyPage';
import ManageAppbar from '../common/ManageAppbar';
import { Route } from 'react-router-dom';
import ProductDetail from '../product/ProductDetail';
import StatisticalDetail from './Statistical/StatisticalDetail';
import GradeDetail from './gradePurchase/GradeDetail';

const ManageContainer = () => {
  return (
    <>
      <ManageAppbar />
      <Route component={MyPage} path="/manage/mypage" />
      <Route component={GradeDetail} path="/manage/grade" />
      {/* 이하 grade === 0 이면, /grade로 이동시키기  */}
      <Route component={ProductManage} path="/manage/product" exact />
      <Route component={ProductDetail} path="/manage/product/:id" />
      <Route component={StatisticalDetail} path="/manage" exact />
    </>
  );
};

export default ManageContainer;
