import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

const AuthUser = () => {
  const token = sessionStorage.getItem('access_token');
  console.log(token);
  return <>{token ? <></> : <Route component={LoginPage} path="/login" />}</>;
};

export default AuthUser;
