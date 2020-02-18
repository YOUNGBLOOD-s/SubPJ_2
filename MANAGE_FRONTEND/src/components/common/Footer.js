import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const FooterWrapper = styled.div`
  background-color: black;
  padding: 1rem;
  .text {
    color: white;
    text-align: center;
  }
  .company {
    color: ${palette.red[600]};
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="text">
        {new Date().getFullYear()}, NEARBYAD,{' '}
        <span className="company">©YOUNGBLOOD</span>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
