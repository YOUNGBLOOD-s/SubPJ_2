import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Map, List } from 'immutable';
import axios from 'axios';
import StyledTextField from '../../common/StyledTextField';

const MyFormBlcok = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 500px;
  height: 100%;
`;

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.teal[400],
    color: 'white',
  },
})(component.Button);

const MyFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.grey[500]};
    text-decoration: underline;
  }
`;

const MyPagePrev = ({ setAuth, token, setOpen, setUserInfo, loggedInUser }) => {
  const form = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        '/api/auth/infomem',
        // 'http://192.168.100.66:8887/api/auth/infomem',
        { password: e.target.password.value },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        loggedInUser === 'admin'
          ? setUserInfo({ data: List(res.data.memlist) })
          : setUserInfo({ data: Map(res.data.meminfo) });
        setAuth(true);
      })
      .catch(err => {
        console.log(err);
        handleClick();
      });
  };

  return (
    <MyFormBlcok>
      <MyFormWrapper onSubmit={onSubmit}>
        <StyledTextField
          label="비밀번호"
          variant="outlined"
          value={form.password}
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <StyledButton variant="contained" type="submit">
          확인
        </StyledButton>
        <Footer></Footer>
      </MyFormWrapper>
    </MyFormBlcok>
  );
};

export default MyPagePrev;
