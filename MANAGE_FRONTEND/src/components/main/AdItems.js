import React, { useState, useEffect } from 'react';
import AdItem from './AdItem';
import styled from 'styled-components';
import TitleBar from '../Detail/common/TitleBar';
import CaptionText from '../Detail/common/CaptionText';
import { useSelector, useDispatch } from 'react-redux';
import { allAdList, initilizeAds } from '../../modules/ads';

const ItemsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const AdItems = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const { ads } = useSelector(({ ads }) => ({
    ads: ads.all_ads,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAdList({ page, filter }));
  }, [dispatch, page, filter]);

  useEffect(() => {
    return () => {
      dispatch(initilizeAds());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ItemsWrapper>
      <TitleBar>모든 광고</TitleBar>
      <CaptionText>모든 광고를 보여드립니당 ㅎㅎ</CaptionText>
      <div>
        <div>카테고리별</div>
        <select>
          <option value="1">유럽</option>
          <option value="2">북태평양</option>
          <option value="3">아프리카</option>
          <option value="4">아시아</option>
          <option value="5">북미</option>
        </select>
        <div>조회수순/인기순</div>
        <button>초기화</button>
      </div>
      {ads ? (
        ads.map(ad => <AdItem key={ad.idx} ad={ad} />)
      ) : (
        <h5>광고가 없네요...ㅠ</h5>
      )}
    </ItemsWrapper>
  );
};

export default AdItems;
