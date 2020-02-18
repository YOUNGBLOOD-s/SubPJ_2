import React, { useState, useEffect } from 'react';
import AdItem from './AdItem';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { allAdList, initilizeAds } from '../../modules/ads';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';
import Pagination from '../common/Pagination';
import LoadingBackdrop from '../common/LoadingBackdrop';

const ItemsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const FilterWrapper = styled.div`
  border: 1px solid ${palette.grey[300]};
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 3px;
`;

const AdItems = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('DESC');
  const [continents, setContinents] = useState(null);

  const { ads, loading, lastpage } = useSelector(({ ads, loading }) => ({
    ads: ads.all_ads,
    lastpage: ads.all_ads_lastpage,
    loading: loading['ads/ALL_AD_LIST'],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ddd');
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
      <FilterWrapper>
        <component.Grid container>
          <component.Grid item xs={12}>
            <div>카테고리별</div>
            <select>
              <option value="1">유럽</option>
              <option value="2">북태평양</option>
              <option value="3">아프리카</option>
              <option value="4">아시아</option>
              <option value="5">북미</option>
            </select>
          </component.Grid>
          <component.Grid item xs={12}>
            <div>조회수순/인기순</div>
            <button>초기화</button>
          </component.Grid>
        </component.Grid>
      </FilterWrapper>
    </ItemsWrapper>
  );
};

export default AdItems;
