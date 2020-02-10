import React, { useEffect } from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import MyProducts from '../components/manage/productManage/MyProducts/MyProducts';
import { useSelector } from 'react-redux';
import AddProduct from '../components/manage/productManage/AddProduct/AddProduct';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

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
      <MyProducts />
      <AddProduct />
    </div>
  );
};

export default AdminPage;
