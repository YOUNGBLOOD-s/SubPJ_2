import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const PleasePurchaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .small-text {
    font-family: 'Handon3gyeopsal600g';
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${palette.grey[500]};
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  .text {
    font-family: 'Handon3gyeopsal600g';
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: ${palette.theme[400]};
  font-family: 'NanumBarunGothic', sans-serif;
  margin-top: 1rem;
`;

const PleasePurchase = () => {
  return (
    <PleasePurchaseWrapper>
      <div className="small-text">
        <span role="img" aria-label="img">
          🙏
        </span>{' '}
        앗! 이 페이지는 광고주만 볼 수 있어요.
      </div>
      <div className="text">광고주로 등록하고</div>
      <div className="text">최상의 광고 효과를 누리세요!</div>
      <StyledLink to="/manage/grade">
        <span role="img" aria-label="img">
          🛒
        </span>{' '}
        등급 구매하기
      </StyledLink>
    </PleasePurchaseWrapper>
  );
};

export default PleasePurchase;
