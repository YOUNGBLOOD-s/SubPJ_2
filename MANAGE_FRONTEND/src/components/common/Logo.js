import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Eng = styled.div`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Kor = styled.div`
  font-family: 'GmarketSansLight';
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Logo = () => {
  return (
    <TitleWrapper>
      <Eng>NEARBY AD</Eng>
      <Kor>네곁에.</Kor>
    </TitleWrapper>
  );
};

export default Logo;
