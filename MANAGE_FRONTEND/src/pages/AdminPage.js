import React, { useEffect } from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import MyProducts from '../components/manage/productManage/MyProducts/MyProducts';
import { useSelector } from 'react-redux';
import AddProduct from '../components/manage/productManage/AddProduct/AddProduct';
import { Route } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import AdminAppbar from '../components/common/AdminAppbar';
import MyPageAdmin from '../components/manage/MyPage/MyPageAdmin';

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
      <ButtonAppbarContainer />
      <AdminAppbar />
      <Route component={MyProducts} path="/admin" exact />
      <Route component={AddProduct} path="/admin/add" />
      <Route component={ProductDetail} path="/admin/product/:id" />
      <Route component={MyPageAdmin} path="/admin/users" />
    </div>
  );
};

export default AdminPage;
