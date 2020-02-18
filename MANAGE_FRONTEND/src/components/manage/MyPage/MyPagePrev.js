import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Map } from 'immutable';
import axios from 'axios';
import StyledTextField from '../../common/StyledTextField';
import { useSelector } from 'react-redux';
import gradeType from '../../../lib/data/gradeType';

const MyFormBlcok = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 500px;
  height: 100%;
  padding: 1rem;
`;

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.theme[400],
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

const MyInfoWrapper = styled.div`
  border: 1px solid ${palette.grey[300]};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  .username {
  }
`;

const Grade = styled.div`
  color: ${props => {
    if (props.grade === 0) {
      return palette.grey[900];
    } else if (props.grade === 1) {
      return palette.deepPurple[700];
    } else if (props.grade === 2) {
      return palette.grey[500];
    } else if (props.grade === 3) {
      return palette.amber[600];
    } else if (props.grade === 4) {
      return palette.deepPurple['A200'];
    }
  }};
`;

const MyPagePrev = ({ setAuth, token, setOpen, setUserInfo }) => {
  const form = useRef(null);

  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://i02c110.p.ssafy.io:8887/api/auth/infomem',
        { password: e.target.password.value },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        res.data.meminfo.password = '';
        setUserInfo({ data: Map(res.data.meminfo) });
        setAuth(true);
      })
      .catch(err => {
        console.log(err);
        handleClick();
      });
  };

  return (
    <MyFormBlcok>
      {member && (
        <MyInfoWrapper>
          <div className="username">{member.username}</div>
          <Grade grade={member.grade}>{gradeType[member.grade]}</Grade>
        </MyInfoWrapper>
      )}
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
