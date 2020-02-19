import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyProduct from './MyProduct';
import { useDispatch, useSelector } from 'react-redux';
import { userAdList, initilizeAds } from '../../../../modules/ads';
import component from '../../../../lib/material/component';
import TitleBar from '../../../Detail/common/TitleBar';
import { Link } from 'react-router-dom';
import LoadingBackdrop from '../../../common/LoadingBackdrop';
import AddProductLink from '../../../common/AddProductLink';
import palette from '../../../../lib/styles/palette';
import Pagination from '../../../common/Pagination';

const MyProductsWrapper = styled.div`
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const AdListWraaper = styled.div`
  margin: 1rem 0;
`;

const NoAdContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${palette.grey[200]};
  border-radius: 3px;
  padding: 2rem;
  margin-top: 1rem;
  .text {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const MyProducts = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { ads, loading, error, user, lastpage } = useSelector(
    ({ ads, loading, user }) => ({
      ads: ads.user_ads,
      error: ads.error,
      lastpage: ads.user_ads_lastpage,
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

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <MyProductsWrapper>
      <component.Grid container>
        <component.Grid item xs={6}>
          <TitleBar>광고 목록</TitleBar>
        </component.Grid>
        <component.Grid item xs={6}>
          <AddProductLink>광고 추가</AddProductLink>
        </component.Grid>
      </component.Grid>
      {!loading && ads ? (
        <>
          {ads.length > 0 ? (
            <>
              <AdListWraaper>
                <component.Grid container spacing={1}>
                  {ads.map(ad => (
                    <component.Grid item xs={12} sm={6} md={4} key={ad.idx}>
                      <Link to={`/management/product/${ad.idx}`}>
                        <MyProduct
                          ad={ad}
                          isAdmin={user.username === 'admin'}
                        />
                      </Link>
                    </component.Grid>
                  ))}
                </component.Grid>
              </AdListWraaper>
              <component.Grid container>
                <component.Grid item xs={12}>
                  <Pagination
                    currentPage={page}
                    setPage={setPage}
                    lastPage={lastpage}
                  />
                </component.Grid>
              </component.Grid>
            </>
          ) : (
            <NoAdContent>
              <div className="text">현재 게재하신 광고가 없습니다!</div>
              <AddProductLink>광고 게재하러가기</AddProductLink>
            </NoAdContent>
          )}
        </>
      ) : (
        <LoadingBackdrop loading={loading} />
      )}
    </MyProductsWrapper>
  );
};

export default MyProducts;
