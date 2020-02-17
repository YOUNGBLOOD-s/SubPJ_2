import React from 'react';
import Grade from './gradePurchase/Grade';
import ProductManage from './productManage/ProductManage';
import MyPage from './MyPage/MyPage';
import ManageAppbar from '../common/ManageAppbar';
import { Route } from 'react-router-dom';
import ProductDetail from '../product/ProductDetail';
import StatisticalDetail from './Statistical/StatisticalDetail';

const ManageContainer = () => {
  return (
    <div>
      <ManageAppbar />
      <div>
        <Route component={MyPage} path="/manage/mypage" />
        <Route component={Grade} path="/manage/grade" />
        {/* 이하 grade === 0 이면, /grade로 이동시키기  */}
        <Route component={ProductManage} path="/manage/product" exact />
        <Route component={ProductDetail} path="/manage/product/:id" />
        <Route component={StatisticalDetail} path="/manage" exact />
      </div>
    </div>
  );
};

export default ManageContainer;
