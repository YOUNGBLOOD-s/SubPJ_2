import React, { useEffect } from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import MyProducts from '../components/manage/productManage/MyProducts/MyProducts';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import AdminAppbar from '../components/common/AdminAppbar';
import MyPageAdmin from '../components/manage/MyPage/MyPageAdmin';
import { Helmet } from 'react-helmet-async';

const AdminPage = ({ history }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  // ADMIN이 아니면 못들어옵니다.
  useEffect(() => {
    if (!user || user.username !== 'admin') {
      history.push('/');
    }
  }, [user, history]);

  return (
    <div>
      <Helmet>
        <title>관리자패널 - NEARBY AD</title>
      </Helmet>
      <ButtonAppbarContainer />
      <AdminAppbar />
      <Route component={MyProducts} path="/admin" exact />
      <Route component={ProductDetail} path="/admin/product/:id" />
      <Route component={MyPageAdmin} path="/admin/users" />
    </div>
  );
};

export default AdminPage;
