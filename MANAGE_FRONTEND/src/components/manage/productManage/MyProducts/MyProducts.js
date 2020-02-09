import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MyProduct from './MyProduct';

const MyProductsWrapper = styled.div`
  border: 1px solid black;
`;

const MyProducts = () => {
  const [myAds, setMyAds] = useState([]);
  const token = sessionStorage.getItem('access_token');
  useEffect(() => {
    axios
      .get('/api/man/nation/list/', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        console.log(res);
        const { resvalue } = res.data;
        setMyAds(resvalue);
      })
      // TODO: 에러처리
      .catch(err => console.log(err));
  }, [token]);

  return (
    <MyProductsWrapper>
      <h1>내가 올린 광고</h1>
      {myAds.map(ad => (
        <MyProduct ad={ad} key={ad.idx} />
      ))}
    </MyProductsWrapper>
  );
};

export default MyProducts;
