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
import SessionAlert from '../components/common/SessionAlert';

const ContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SessionWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
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
    <>
      <Helmet>
        <title>매니지먼트 - NEARBY AD</title>
      </Helmet>
      <ButtonAppbarContainer />
      {user && (
        <SessionWrapper>
          <SessionAlert />
        </SessionWrapper>
      )}
      {user && <ManagementAppBar user={user} />}
      <ContentWrapper>
        {user ? (
          <>{user.username === 'admin' ? <AdminPage /> : <ManagePage />}</>
        ) : (
          <LoadingBackdrop />
        )}
      </ContentWrapper>
    </>
  );
};

export default ManagementPage;
