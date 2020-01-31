import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const StyledText = styled.div`
  font-size: 1rem;
  color: ${palette.red[200]};
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 1rem;
`;

const CaptionText = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default CaptionText;
