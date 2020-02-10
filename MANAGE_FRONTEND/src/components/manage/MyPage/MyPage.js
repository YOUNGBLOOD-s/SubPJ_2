import React, { useEffect } from 'react';
import MyPageForm from './MyPageForm';
import axios from 'axios';
import { useState } from 'react';
import MyPagePrev from './MyPagePrev';

const MyPage = () => {
  const token = sessionStorage.getItem('access_token');
  const [userInfo, setUserInfo] = useState(null);
  const [auth, setAuth] = useState(false);

  return (
    <>
      {auth ? (
        <MyPageForm userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <MyPagePrev setAuth={setAuth} token={token} />
      )}
    </>
  );
};

export default MyPage;
