import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Map } from 'immutable';
import axios from 'axios';
import { useSelector } from 'react-redux';
import gradeType from '../../../lib/data/gradeType';

const MyFormBlcok = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  max-width: 500px;
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  .wrapper {
    margin-bottom: 1rem;
    .text {
      text-align: center;
      font-size: 1.5rem;
      color: ${palette.grey[600]};
    }
    .username {
      margin-bottom: 1rem;
      font-size: 2rem;
      font-family: 'Handon3gyeopsal600g';
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }
  }
`;

const Grade = styled.div`
  font-family: 'Handon3gyeopsal600g';
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
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
          <div className="wrapper">
            <div className="text">나의 등급</div>
            <Grade grade={member.grade}>{gradeType[member.grade]}</Grade>
          </div>
          <div className="wrapper">
            <div className="text">유저명</div>
            <div className="username">{member.username}</div>
          </div>
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
