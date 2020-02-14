import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyProduct from './MyProduct';
import { useDispatch, useSelector } from 'react-redux';
import { userAdList, initilizeAds } from '../../../../modules/ads';
import component from '../../../../lib/material/component';
import TitleBar from '../../../Detail/common/TitleBar';
import { Link } from 'react-router-dom';
import LoadingBackdrop from '../../../common/LoadingBackdrop';

const MyProductsWrapper = styled.div`
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const AdListWraaper = styled.div`
  margin: 1rem 0;
`;

const MyProducts = () => {
  const [page, setPage] = useState(1);
  const lastPage = 3;
  const dispatch = useDispatch();
  const { ads, loading, error, user } = useSelector(
    ({ ads, loading, user }) => ({
      ads: ads.user_ads,
      error: ads.error,
      loading: loading['ads/USER_AD_LIST'],
      user: user.user,
    }),
  );
  const token = sessionStorage.getItem('access_token');
  useEffect(() => {
    dispatch(userAdList({ page, token }));
  }, [dispatch, page, token]);

  useEffect(() => {
    return () => {
      dispatch(initilizeAds());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increasePage = () => {
    if (page !== lastPage) {
      setPage(page + 1);
    }
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <MyProductsWrapper>
      <TitleBar>광고 목록</TitleBar>
      {!loading && ads ? (
        <>
          <AdListWraaper>
            <component.Grid container spacing={1}>
              {ads.map(ad => (
                <component.Grid item xs={12} sm={6} md={4} key={ad.idx}>
                  <Link
                    to={
                      user.username === 'admin'
                        ? `/admin/product/${ad.idx}`
                        : `/manage/product/${ad.idx}`
                    }
                  >
                    <MyProduct ad={ad} isAdmin={user.username === 'admin'} />
                  </Link>
                </component.Grid>
              ))}
            </component.Grid>
          </AdListWraaper>
          <component.Grid container spacing={1}>
            <component.Grid item xs={6}>
              <component.Button
                onClick={decreasePage}
                disabled={page === 1}
                fullWidth
                variant="contained"
                color="primary"
              >
                이전 페이지
              </component.Button>
            </component.Grid>
            <component.Grid item xs={6}>
              <component.Button
                onClick={increasePage}
                disabled={page === lastPage}
                fullWidth
                variant="contained"
                color="primary"
              >
                다음 페이지
              </component.Button>
            </component.Grid>
          </component.Grid>
        </>
      ) : (
        <LoadingBackdrop loading={loading} />
      )}
    </MyProductsWrapper>
  );
};

export default MyProducts;
