import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledTypography = styled(Typography)`
  font-weight: bold;
`;

const TitleBarBlock = styled.div`
  margin-bottom: 1rem;
`;

const TitleBar = ({ text }) => {
  return (
    <TitleBarBlock>
      <StyledTypography variant="h5">{text}</StyledTypography>
    </TitleBarBlock>
  );
};

export default TitleBar;
