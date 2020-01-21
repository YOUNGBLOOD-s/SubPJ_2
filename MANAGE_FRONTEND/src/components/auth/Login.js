import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { teal } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: teal[500],
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
        borderColor: teal[500],
      },
    },
  },
})(TextField);

const LoginButton = withStyles({
  root: {
    marginBottom: '1rem',
    marginTop: '1rem',
  },
})(Button);

const SignupButton = withStyles({
  root: {
    backgroundColor: teal[400],
    color: 'white',
  },
})(Button);

const LoginBlock = styled.div``;

const LoginWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <LoginBlock>
      <LoginWrapper>
        <LoginForm>
          <StyledTextField label="아이디" variant="outlined" />
          <StyledTextField label="비밀번호" variant="outlined" />

          <LoginButton variant="contained">로그인</LoginButton>
          <SignupButton variant="contained">회원가입</SignupButton>
        </LoginForm>
      </LoginWrapper>
    </LoginBlock>
  );
};

export default Login;
