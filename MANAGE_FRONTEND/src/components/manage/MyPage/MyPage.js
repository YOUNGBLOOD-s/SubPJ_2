import React from 'react';
import MyPageForm from './MyPageForm';
import { useState } from 'react';
import MyPagePrev from './MyPagePrev';
import ToastMessage from './ToastMessage';

const MyPage = () => {
  const token = sessionStorage.getItem('access_token');
  const [userInfo, setUserInfo] = useState(null);
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {auth ? (
        <MyPageForm userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <>
          <ToastMessage open={open} setOpen={setOpen} />
          <MyPagePrev
            setAuth={setAuth}
            token={token}
            setOpen={setOpen}
            setUserInfo={setUserInfo}
          />
        </>
      )}
    </>
  );
};

export default MyPage;
