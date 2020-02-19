import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user, loading } = useSelector(
    ({ auth, user, loading }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      loading: loading['auth/LOGIN'],
    }),
  );

  const [error, setError] = useState(null);

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;

    if (!username || !password) {
      setError('아이디 또는 비밀번호를 입력해주세요.');
      return;
    }

    if (username.length > 50 || password.length > 50) {
      setError('잘못된 아이디 또는 비밀번호 입력입니다.');
      return;
    }

    dispatch(login({ username, password }));
  };

  // 맨 처음 렌더링 시 초기화.
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response) {
        const { status } = authError.response;
        if (status === 401) {
          setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }

        if (status === 404) {
          setError('존재하지 않는 사용자입니다.');
        }

        return;
      }
      return;
    }
    if (auth) {
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
  }, [user, history]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(LoginForm);
