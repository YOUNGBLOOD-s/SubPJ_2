import React, { useState, useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Map } from 'immutable';

const MyFormBlcok = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
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
        borderColor: palette.teal[50],
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

const MyFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.grey[500]};
    text-decoration: underline;
  }
`;

const onChange = e => {
  console.log(e.target);
};

const onSubmit = () => {
  console.log('submit');
};

const MyPageForm = userInfo => {
  const form = useRef(null);
  const [password, setPassword] = useState('');
  const onChangePassword = e => {};

  console.log(userInfo.data);

  return (
    <MyFormBlcok>
      <MyFormWrapper onSubmit={onSubmit} ref={form}>
        <StyledTextField
          label="아이디"
          variant="outlined"
          onChange={onChange}
          value={userInfo.username}
          name="username"
          autoComplete="username"
        />
        <StyledTextField
          label="변경할 비밀번호"
          variant="outlined"
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          autoComplete="new-password"
        />
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
        <StyledTextField
          label="등급"
          variant="outlined"
          value={form.company}
          name="grade"
          type="text"
          autoComplete="grade"
          disabled={true}
        />
        <StyledButton variant="contained" type="submit">
          수정
        </StyledButton>
        <Footer></Footer>
      </MyFormWrapper>
    </MyFormBlcok>
  );
};

export default MyPageForm;
