import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';
import { useState } from 'react';

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user, loading } = useSelector(
    ({ auth, user, loading }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      loading: loading['auth/REGISTER'],
    }),
  );

  const onChange = e => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm, company } = form;
    if (!password || !username || !passwordConfirm || !company) {
      setError('모든 필드를 채워주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 동일하지 않습니다.');
      return;
    }

    if (username.length > 15) {
      setError('아이디가 너무 깁니다. 아이디는 15자 이하입니다.');
      return;
    }

    if (password.length > 30 || passwordConfirm.length > 30) {
      setError('패스워드가 너무 깁니다. 패스워드는 30자 이하입니다.');
      return;
    }

    if (company.length > 20) {
      setError('회사명이 너무 깁니다. 회사명은 20자 이하입니다.');
      return;
    }

    dispatch(register({ username, password, company }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // auth 값 및 authError 값 중 무엇이 유효한지에 따른 작업을 한다.
  useEffect(() => {
    if (authError) {
      const { status } = authError.response;
      if (status === 409) {
        setError('이미 존재하는 아이디입니다.');
      }
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check(auth.token));
      sessionStorage.setItem('access_token', auth.token);
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('로컬 스토리지가 정상 동작하지 않습니다.');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(RegisterForm);
