import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MyProductsWrapper = styled.div`
  border: 1px solid black;
`;

const MyProducts = () => {
  const token = sessionStorage.getItem('access_token');
  useEffect(() => {
    axios
      .get('/api/man/nation/list', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        console.log(res);
      })
      // TODO: 에러처리
      .catch(err => console.log(err));
  }, [token]);

  return (
    <MyProductsWrapper>
      <h1>내 광고들</h1>
      <h3>/api/man/nation/list 로 날리는중..</h3>
      <p>가져온 광고들에 대해 각각 수정, 삭제 액션 달것</p>
    </MyProductsWrapper>
  );
};

export default MyProducts;
