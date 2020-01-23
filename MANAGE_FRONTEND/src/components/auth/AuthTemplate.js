import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import component from '../../lib/material/component';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 360px;
`;

const SubTitle = withStyles({
  root: {
    fontWeight: 'bold',
  },
})(component.Typography);

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <Box>
        <TitleWrapper>
          <component.Typography variant="caption">
            NEARBY AD
          </component.Typography>
          <SubTitle variant="h2">네곁에.</SubTitle>
        </TitleWrapper>
        {children}
      </Box>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
