import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyProduct from './MyProduct';
import { useDispatch, useSelector } from 'react-redux';
import { listAds } from '../../../../modules/ads';
import component from '../../../../lib/material/component';
import TitleBar from '../../../Detail/common/TitleBar';

const MyProductsWrapper = styled.div`
  padding: 1rem;
`;

const AdListWraaper = styled.div`
  margin: 1rem 0;
`;

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
      <TitleBar>광고 목록</TitleBar>
      {!loading && ads && (
        <AdListWraaper>
          <component.Grid container spacing={1}>
            {ads.map(ad => (
              <component.Grid item xs={6} md={4} key={ad.idx}>
                <MyProduct ad={ad} />
              </component.Grid>
            ))}
          </component.Grid>
        </AdListWraaper>
      )}
      <component.Grid container>
        <component.Grid item xs={6}>
          <component.Button fullWidth color="primary">
            이전 페이지
          </component.Button>
        </component.Grid>
        <component.Grid item xs={6}>
          <component.Button fullWidth color="primary">
            다음 페이지
          </component.Button>
        </component.Grid>
      </component.Grid>
    </MyProductsWrapper>
  );
};

export default MyProducts;
