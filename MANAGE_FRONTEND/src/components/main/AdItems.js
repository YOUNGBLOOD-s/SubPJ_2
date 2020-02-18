import React, { useState, useEffect } from 'react';
import AdItem from './AdItem';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { allAdList, initilizeAds } from '../../modules/ads';
import component from '../../lib/material/component';
import Pagination from '../common/Pagination';
import LoadingBackdrop from '../common/LoadingBackdrop';
import Filter from './Filter';

const ItemsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const AdItems = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('ASC');
  const [continents, setContinents] = useState(null);

  const { ads, loading, lastpage } = useSelector(({ ads, loading }) => ({
    ads: ads.all_ads,
    lastpage: ads.all_ads_lastpage,
    loading: loading['ads/ALL_AD_LIST'],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAdList({ page, continents, sort }));
  }, [dispatch, page, continents, sort]);

  useEffect(() => {
    return () => {
      dispatch(initilizeAds());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gridSize = {
    0: 12,
    1: 6,
    2: 6,
    3: 5,
    4: 7,
    5: 7,
    6: 5,
    7: 12,
    8: 5,
    9: 7,
    10: 6,
    11: 6,
  };
  return (
    <ItemsWrapper>
      <component.Grid container spacing={1}>
        <component.Grid item xs={12}>
          <Filter
            continents={continents}
            setContinets={setContinents}
            sort={sort}
            setSort={setSort}
            setPage={setPage}
          />
        </component.Grid>
        {!loading && ads ? (
          <>
            {ads.map((ad, idx) => (
              <component.Grid item xs={12} md={gridSize[idx] || 1} key={ad.idx}>
                <AdItem ad={ad} />
              </component.Grid>
            ))}
            <component.Grid item xs={12}>
              <Pagination
                currentPage={page}
                lastPage={lastpage}
                setPage={setPage}
                setContinents={setContinents}
                setSort={setSort}
              />
            </component.Grid>
          </>
        ) : (
          <LoadingBackdrop loading={loading} />
        )}
      </component.Grid>
    </ItemsWrapper>
  );
};

export default AdItems;
