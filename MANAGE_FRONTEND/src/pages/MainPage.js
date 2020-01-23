import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainPageBlock = styled.div`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <StyledLink to="/login">로그인</StyledLink>
      <StyledLink to="/register">회원가입</StyledLink>
      <StyledLink to="/admin">어드민</StyledLink>
      <StyledLink to="/manage">광고주관리</StyledLink>
    </MainPageBlock>
  );
};

export default MainPage;
