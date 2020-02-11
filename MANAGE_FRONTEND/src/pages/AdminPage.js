import React, { useEffect } from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import MyProducts from '../components/manage/productManage/MyProducts/MyProducts';
import { useSelector } from 'react-redux';
import AddProduct from '../components/manage/productManage/AddProduct/AddProduct';
import { Route, Link } from 'react-router-dom';

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
      <div>
        <Link to="/admin">광고목록</Link>
        <Link to="/admin/users">유저목록</Link>
        <Link to="/admin/add">상품추가</Link>
        <Link to="/admin/update">상품수정</Link>
      </div>
      <Route component={MyProducts} path="/admin" exact />
      <Route component={AddProduct} path="/admin/add" />
    </div>
  );
};

export default AdminPage;
