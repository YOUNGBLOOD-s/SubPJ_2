import React, { useState, useEffect } from 'react';
import axios from '../../../node_modules/axios/index';
import AdItem from './AdItem';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const AdItems = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get('/api/all')
      .then(res => {
        const { AllNationDatas } = res.data;
        setAds(AllNationDatas);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h4>모든 광고를 가져오는 메인페이지 제작중. 페이지네이션? 필터링?</h4>
      <ItemsWrapper>
        {ads.map(ad => (
          <AdItem key={ad.idx} ad={ad} />
        ))}
      </ItemsWrapper>
    </div>
  );
};

export default AdItems;
