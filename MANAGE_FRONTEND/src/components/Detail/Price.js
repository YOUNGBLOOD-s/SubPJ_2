import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TitleBar from './common/TitleBar';

const PriceBlock = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${palette.theme[500]};
`;

const Price = ({ price }) => {
  return (
    <PriceBlock>
      <TitleBar>상품 가격</TitleBar>
      <PriceWrapper>₩ {Number(price).toLocaleString()} 원</PriceWrapper>
    </PriceBlock>
  );
};

export default Price;
