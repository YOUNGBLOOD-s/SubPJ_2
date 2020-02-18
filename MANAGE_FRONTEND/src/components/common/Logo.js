import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import component from '../../lib/material/component';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1rem;
`;

const SubTitle = withStyles({
  root: {
    fontWeight: 'bold',
  },
})(component.Typography);

const Logo = () => {
  return (
    <TitleWrapper>
      <component.Typography variant="caption">NEARBY AD</component.Typography>
      <SubTitle variant="h4">네곁에.</SubTitle>
    </TitleWrapper>
  );
};

export default Logo;
