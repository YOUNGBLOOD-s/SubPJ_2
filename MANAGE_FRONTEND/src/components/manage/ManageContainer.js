import React from 'react';
import Chart from './Chart';
import Grade from './gradePurchase/Grade';
import ProductManage from './productManage/ProductManage';
import MyPage from './MyPage/MyPage';
import ManageAppbar from '../common/ManageAppbar';
import { Route } from 'react-router-dom';
import ProductDetail from '../product/ProductDetail';

const ManageContainer = () => {
  return (
    <div>
      <ManageAppbar />
      <div>
        <Route component={Chart} path="/manage" exact />
        <Route component={ProductManage} path="/manage/product" exact />
        <Route component={ProductDetail} path="/manage/product/:id" />
        <Route component={MyPage} path="/manage/mypage" />
        <Route component={Grade} path="/manage/grade" />
      </div>
    </div>
  );
};

export default ManageContainer;
