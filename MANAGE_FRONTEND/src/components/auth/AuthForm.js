import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';

const AuthFormBlcok = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: palette.teal[500],
    },
    '& .MuiOutlinedInput-root': {
      // 기본 필드 보더 색상
      '& fieldset': {
        borderColor: 'black',
      },
      // 호버 했을때 색상
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      //  포커스 시 보더 색상
      '&.Mui-focused fieldset': {
        borderColor: palette.teal[600],
      },
    },
  },
})(component.TextField);

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.teal[400],
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

const AuthForm = ({ type, form, onChange, onSubmit }) => {
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
          <StyledTextField
            label="비밀번호 확인"
            variant="outlined"
            onChange={onChange}
            value={form.passwordConfirm}
            name="passwordConfirm"
            type="password"
            autoComplete="new-password"
          />
        )}
        <StyledButton variant="contained">{text}</StyledButton>
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
