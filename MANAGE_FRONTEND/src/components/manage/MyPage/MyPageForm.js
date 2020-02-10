import React, { useState, useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import axios from 'axios';
import { useSelector } from 'react-redux';

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

const MyPageForm = ({ userInfo, setUserInfo }) => {
  const token = sessionStorage.getItem('access_token');
  const form = useRef(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordState, setPasswordState] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { data } = userInfo;
  const username = data.get('username');
  const company = data.get('company');
  const grade = data.get('grade');

  const { loggedInUser } = useSelector(({ user }) => ({
    loggedInUser: user.user.username,
  }));

  const onChangePassword = e => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
      setUserInfo({
        data: data.set(name, value),
      });
    } else {
      setPasswordConfirm(value);
    }
  };
  const isSame = () => {
    if (password === passwordConfirm) {
      setPasswordState(false);
    } else {
      setPasswordState(true);
    }
  };
  useEffect(() => {
    isSame();
  }, [password]);

  useEffect(() => {
    isSame();
  }, [passwordConfirm]);

  const onChange = e => {
    const { value, name } = e.target;
    const { data } = userInfo;
    setUserInfo({
      data: data.set(name, value),
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(data.toJS());
    if (password !== passwordConfirm) {
      alert('비밀번호 확인이 일치하지 않습니다!');
      return;
    }
    axios
      .put('/api/auth/updatemem', data.toJS(), {
        headers: {
          Authorization: token,
        },
      })
      .then(res => console.log(res))
      .then(err => console.log(err));
  };

  if (isAdmin !== true && loggedInUser === 'admin') {
    setIsAdmin(true);
  }

  return (
    <MyFormBlcok>
      <MyFormWrapper onSubmit={onSubmit} ref={form}>
        <StyledTextField
          label="아이디"
          variant="outlined"
          onChange={onChange}
          value={username}
          name="username"
          autoComplete="username"
          disabled={true}
        />
        <StyledTextField
          label="등급"
          variant="outlined"
          value={grade}
          name="grade"
          type="text"
          autoComplete="grade"
          disabled={!isAdmin}
        />
        <StyledTextField
          label="변경할 비밀번호"
          variant="outlined"
          onChange={onChangePassword}
          value={password}
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <StyledTextField
          label="비밀번호 확인"
          variant="outlined"
          onChange={onChangePassword}
          value={passwordConfirm}
          name="passwordConfirm"
          type="password"
          error={passwordState}
          autoComplete="new-password"
        />
        <StyledTextField
          label="회사명"
          variant="outlined"
          onChange={onChange}
          value={company}
          name="company"
          type="text"
          autoComplete="company"
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
