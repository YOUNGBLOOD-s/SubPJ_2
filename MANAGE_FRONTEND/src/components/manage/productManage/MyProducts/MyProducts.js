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
import MyProductPending from './MyProductPending';
import { getManagerInfo } from '../../../../modules/manager';
import BroadCastControl from './BroadCastControl';

const MyProductsWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
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
    dispatch(getManagerInfo(token));
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
      <BroadCastControl />
      {!loading && ads ? (
        <>
          {ads.length > 0 ? (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <component.Grid container>
                  <component.Grid item xs={6}>
                    <TitleBar>광고 목록</TitleBar>
                  </component.Grid>
                  <component.Grid item xs={6}>
                    <AddProductLink>광고 추가</AddProductLink>
                  </component.Grid>
                </component.Grid>
              </div>

              <component.Grid container spacing={1}>
                {ads.map(ad => (
                  <component.Grid item xs={12} sm={6} md={4} key={ad.idx}>
                    {ad.completed ? (
                      <Link to={`/management/product/${ad.idx}`}>
                        <MyProduct
                          ad={ad}
                          isAdmin={user.username === 'admin'}
                        />
                      </Link>
                    ) : (
                      <>
                        {user.username === 'admin' ? (
                          <Link to={`/management/product/${ad.idx}`}>
                            <MyProduct
                              ad={ad}
                              isAdmin={user.username === 'admin'}
                            />
                          </Link>
                        ) : (
                          <MyProductPending ad={ad} />
                        )}
                      </>
                    )}
                  </component.Grid>
                ))}
              </component.Grid>

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
