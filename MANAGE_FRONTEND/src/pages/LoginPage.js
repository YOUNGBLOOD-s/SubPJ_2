import React from 'react';
import Login from '../components/auth/Login';
import AuthTemplate from '../components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Login />
    </AuthTemplate>
  );
};

export default LoginPage;
