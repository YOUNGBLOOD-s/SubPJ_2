import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import SessionContent from './SessionContent';

const SessionAlert = () => {
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
    //TODO: 로그아웃 시 세션스토리지에서 expiration_time 지우기
    const original_token = sessionStorage.getItem('access_token');
    axios
      .post(
        'https://i02c110.p.ssafy.io:8887/api/auth/refresh',
        {},
        {
          headers: {
            Authorization: original_token,
          },
        },
      )
      .then(res => {
        const expiration_time = res.data.expiration_Timeout;
        const token = res.data.token;
        sessionStorage.setItem('expiration_time', expiration_time);
        sessionStorage.setItem('access_token', token);
        setTime(expiration_time);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SessionContent label={'세션 만료 : ' + time} onClick={onClick} />
    </>
  );
};

export default SessionAlert;
