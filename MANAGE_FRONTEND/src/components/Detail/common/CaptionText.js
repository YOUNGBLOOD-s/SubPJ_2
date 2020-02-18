import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const StyledText = styled.div`
  font-size: 1rem;
  color: ${palette.theme[200]};
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0.5rem 0 1rem 0;
`;

const CaptionText = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default CaptionText;
