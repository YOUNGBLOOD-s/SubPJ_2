import React, { useEffect } from 'react';
import ManageContainer from '../components/manage/ManageContainer';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../modules/user';
import { Helmet } from 'react-helmet-async';

const ManagePage = ({ history }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser(token));
  }, [token, dispatch]);

  // USER가 아니면 못들어옵니다.
  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <>
      <Helmet>
        <title>광고관리 - NEARBY AD</title>
      </Helmet>
      <ButtonAppbarContainer />
      <ManageContainer />
    </>
  );
};

export default ManagePage;
