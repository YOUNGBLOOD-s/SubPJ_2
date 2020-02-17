import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: black;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>NEARBYAD, ©YOUNGBLOOD, {new Date().getFullYear()}</div>
    </FooterWrapper>
  );
};

export default Footer;
