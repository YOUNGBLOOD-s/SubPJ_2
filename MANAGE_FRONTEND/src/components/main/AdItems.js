import React, { useState, useEffect } from 'react';
import AdItem from './AdItem';
import styled from 'styled-components';
import TitleBar from '../Detail/common/TitleBar';
import { useSelector, useDispatch } from 'react-redux';
import { allAdList, initilizeAds } from '../../modules/ads';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';
import Pagination from '../common/Pagination';

const ItemsWrapper = styled.div`
  max-width: 1000px;
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
  const [filter, setFilter] = useState('');
  const { ads } = useSelector(({ ads }) => ({
    ads: ads.all_ads,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAdList({ page, continent: 1, sort: 1 }));
  }, [dispatch, page, filter]);

  useEffect(() => {
    return () => {
      dispatch(initilizeAds());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ItemsWrapper>
      <TitleBar>진행중인 광고</TitleBar>
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
      <component.Grid container spacing={1}>
        {ads ? (
          <>
            {ads.map(ad => (
              <component.Grid item xs={12} sm={6} md={4}>
                <AdItem key={ad.idx} ad={ad} />
              </component.Grid>
            ))}
            <component.Grid item xs={12}>
              <Pagination />
            </component.Grid>
          </>
        ) : (
          <h5>광고가 없네요...ㅠ</h5>
        )}
      </component.Grid>
    </ItemsWrapper>
  );
};

export default AdItems;
