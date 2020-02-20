import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';

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
  width: 270px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <Box>
        <TitleWrapper>
          <Logo />
        </TitleWrapper>
        {children}
      </Box>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
