import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  .eng {
    font-size: 0.8rem;
  }
  .title {
    font-family: 'GmarketSansLight';
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Logo = () => {
  return (
    <TitleWrapper>
      <div className="eng">NEARBY AD</div>
      <div className="title">네곁에.</div>
    </TitleWrapper>
  );
};

export default Logo;
