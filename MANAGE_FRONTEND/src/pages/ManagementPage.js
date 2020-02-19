import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import AdminPage from './AdminPage';
import ManagePage from './ManagePage';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../modules/user';
import LoadingBackdrop from '../components/common/LoadingBackdrop';
import ManagementAppBar from '../components/common/ManagementAppBar';

const ManagementPageWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ManagementPage = ({ history }) => {
  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser(token));
  }, [token, dispatch]);
  // TODO: 비 로그인시 /login으로 돌려보내
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  return (
    <ManagementPageWrapper>
      <Helmet>
        <title>매니지먼트 - NEARBY AD</title>
      </Helmet>
      <ButtonAppbarContainer />
      <Content>
        {user ? (
          <>
            <ManagementAppBar user={user} />
            {user.username === 'admin' ? <AdminPage /> : <ManagePage />}
          </>
        ) : (
          <LoadingBackdrop />
        )}
      </Content>
    </ManagementPageWrapper>
  );
};

export default ManagementPage;
