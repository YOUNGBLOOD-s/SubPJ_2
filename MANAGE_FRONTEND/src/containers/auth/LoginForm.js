import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;
    // TODO: 에러잡기
    dispatch(login({ username, password }));
  };

  // 맨 처음 렌더링 시 초기화.
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      console.log(auth);
      // TODO : 세션 스토리지에 저장?
      sessionStorage.setItem('access_token', auth.token);
      history.push('/');
    }
  }, [auth, authError, dispatch, history]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(LoginForm);
