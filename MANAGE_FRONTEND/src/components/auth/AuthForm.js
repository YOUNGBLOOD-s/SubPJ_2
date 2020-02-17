import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';
import StyledTextField from '../common/StyledTextField';

const AuthFormBlcok = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.theme[300],
    color: 'white',
  },
})(component.Button);

const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.grey[500]};
    text-decoration: underline;
  }
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlcok>
      <AuthFormWrapper onSubmit={onSubmit}>
        <StyledTextField
          label="아이디"
          variant="outlined"
          onChange={onChange}
          value={form.username}
          name="username"
          autoComplete="username"
        />
        <StyledTextField
          label="비밀번호"
          variant="outlined"
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          autoComplete="new-password"
        />
        {type === 'register' && (
          <>
            <StyledTextField
              label="비밀번호 확인"
              variant="outlined"
              onChange={onChange}
              value={form.passwordConfirm}
              name="passwordConfirm"
              type="password"
              autoComplete="new-password"
            />
            <StyledTextField
              label="회사명"
              variant="outlined"
              onChange={onChange}
              value={form.company}
              name="company"
              type="text"
              autoComplete="company"
            />
          </>
        )}
        <p>{error ? error : ''}</p>
        <StyledButton variant="contained" type="submit">
          {text}
        </StyledButton>
        <Footer>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormWrapper>
    </AuthFormBlcok>
  );
};

export default AuthForm;
