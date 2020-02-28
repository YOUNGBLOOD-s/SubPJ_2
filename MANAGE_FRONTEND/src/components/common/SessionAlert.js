import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import SessionContent from './SessionContent';

const SessionAlert = () => {
  const [tmin, setTmin] = useState(0);
  const [tsec, setTsec] = useState(0);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  let timerInterval = null;

  const Timer = () => {
    const expiration_time = sessionStorage.getItem('expiration_time');
    if (!expiration_time) {
      clearInterval(timerInterval);
      return;
    }
    const leftTime =
      parseInt(
        new Date(expiration_time.split(' (')[0]).getTime() / 1000 -
          new Date().getTime() / 1000,
      ) + 1;
    const min = parseInt(leftTime / 60);
    const sec = leftTime % 60;
    setTmin(min);
    setTsec(sec);
  };

  useEffect(() => {
    clearInterval(timerInterval);
    if (sessionStorage.getItem('expiration_time') != null) {
      Timer();
      timerInterval = setInterval(Timer, 1000);
    }
  }, []);

  useEffect(() => {
    if (auth) {
      const expiration_time = auth.expiration_Timeout;
      sessionStorage.setItem('expiration_time', expiration_time);
      clearInterval(timerInterval);
      if (sessionStorage.getItem('expiration_time') != null) {
        Timer();
        timerInterval = setInterval(Timer, 1000);
      }
    }
  }, [auth]);

  const onClick = () => {
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

        clearInterval(timerInterval);
        Timer();
        setInterval(Timer, 1000);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SessionContent min={tmin} sec={tsec} onClick={onClick} />
    </>
  );
};

export default SessionAlert;
