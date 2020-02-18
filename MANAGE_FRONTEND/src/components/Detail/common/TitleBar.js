import React from 'react';
import styled from 'styled-components';

const TitleBarText = styled.div`
  /* margin-bottom: 0.5rem; */
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  font-size: 1.3rem;
`;

const TitleBar = ({ children }) => {
  return <TitleBarText>{children}</TitleBarText>;
};

export default TitleBar;
