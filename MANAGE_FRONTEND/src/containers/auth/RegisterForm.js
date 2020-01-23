import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = e => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm, company } = form;
    if (password !== passwordConfirm) {
      // ToDo : 오류처리
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
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
    />
  );
};

export default RegisterForm;
