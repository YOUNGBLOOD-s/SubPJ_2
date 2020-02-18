import React, { useState, useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.teal[600],
      },
    },
  },
})(component.TextField);

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.theme[400],
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

const MyPageForm = ({ userInfo, setUserInfo, history }) => {
  const token = sessionStorage.getItem('access_token');
  const form = useRef(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordState, setPasswordState] = useState(true);
  const { data } = userInfo;
  const username = data.get('username');
  const company = data.get('company');
  const grade = data.get('grade');

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isSame = () => {
    if (password === passwordConfirm) {
      setPasswordState(false);
    } else {
      setPasswordState(true);
    }
  };

  useEffect(() => {
    isSame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  useEffect(() => {
    isSame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (password !== passwordConfirm) {
      alert('비밀번호 확인이 일치하지 않습니다!');
      return;
    }
    axios
      .put('https://i02c110.p.ssafy.io:8887/api/auth/updatemem', data.toJS(), {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert('정보가 변경되었습니다.');
        history.push('/manage');
      })
      .catch(err => alert('정보 변경에 실패했습니다.'));
  };

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
          disabled={true}
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

export default withRouter(MyPageForm);
