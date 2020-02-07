import React, { useEffect } from 'react';
import MyPageForm from './MyPageForm';
import axios from 'axios';

const MyPage = () => {
  const token = sessionStorage.getItem('access_token');
  const user = sessionStorage.getItem('user');
  useEffect(() => {
    axios
      .get('http://52.78.218.79:8887/api/auth/infomem/' + user, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <MyPageForm />
    </div>
  );
};

export default MyPage;
