import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '4rem',
    left: '1rem',
  },
});

const SessionAlert = () => {
  const classes = useStyles();
  const [time, setTime] = useState(0);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  useEffect(() => {
    const expiration_time = sessionStorage.getItem('expiration_time');
    if (expiration_time) setTime(expiration_time);
  }, []);

  useEffect(() => {
    if (auth) {
      //TODO: setInterval 등 사용해서 타이머 구현해서 세션 남은 시간 알려주기
      const expiration_time = auth.expiration_Timeout;
      const leftTime = parseInt(
        new Date(expiration_time.split(' (')[0]).getTime() / 1000 -
          new Date().getTime() / 1000,
      );
      const min = parseInt(leftTime / 60);
      const sec = leftTime % 60;
      console.log('분: ' + min);
      console.log('초: ' + sec);
      sessionStorage.setItem('expiration_time', expiration_time);
      setTime(expiration_time);
    }
  }, [auth]);

  const onClick = () => {
    //TODO: 토큰 요청 시 세션 갱신 API로 교체하기
    axios
      .post('https://i02c110.p.ssafy.io:8887/api/auth/login', {
        username: 'choiys',
        password: 'choiys',
      })
      .then(res => {
        const expiration_time = res.data.expiration_Timeout;
        sessionStorage.setItem('expiration_time', expiration_time);
        setTime(expiration_time);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Chip
        className={classes.root}
        icon={<FaceIcon />}
        label={'세션 만료 : ' + time}
        clickable
        color="primary"
        onClick={onClick}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
    </>
  );
};

export default SessionAlert;
