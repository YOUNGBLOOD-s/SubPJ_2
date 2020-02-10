import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyProduct from './MyProduct';
import { useDispatch, useSelector } from 'react-redux';
import { listAds } from '../../../../modules/ads';

const MyProductsWrapper = styled.div``;

const MyProducts = () => {
  const dispatch = useDispatch();
  const { ads, loading, error } = useSelector(({ ads, loading }) => ({
    ads: ads.ads,
    error: ads.error,
    loading: loading['ads/LIST_ADS'],
  }));

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    dispatch(listAds(token));
  }, [dispatch]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <MyProductsWrapper>
      <h1>AD LIST</h1>
      {!loading && ads && (
        <>
          {ads.map(ad => (
            <MyProduct ad={ad} key={ad.idx} />
          ))}
        </>
      )}
    </MyProductsWrapper>
  );
};

export default MyProducts;
