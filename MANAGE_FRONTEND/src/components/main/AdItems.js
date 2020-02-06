import React, { useState, useEffect } from 'react';
import axios from '../../../node_modules/axios/index';
import AdItem from './AdItem';
import styled from 'styled-components';
import TitleBar from '../Detail/common/TitleBar';
import CaptionText from '../Detail/common/CaptionText';

const ItemsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const AdItems = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // TODO: filter ? pagination?
    axios
      .get('/api/all')
      .then(res => {
        const { AllNationDatas } = res.data;
        setAds(AllNationDatas);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ItemsWrapper>
      <TitleBar>모든 광고</TitleBar>
      <CaptionText>모든 광고를 보여드립니당 ㅎㅎ</CaptionText>
      {ads.map(ad => (
        <AdItem key={ad.idx} ad={ad} />
      ))}
    </ItemsWrapper>
  );
};

export default AdItems;
