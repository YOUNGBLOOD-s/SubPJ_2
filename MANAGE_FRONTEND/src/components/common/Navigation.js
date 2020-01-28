import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NavigationBlock = styled.div`
  padding: 1rem;
  background-color: black;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
  color: white;
`;

const Navigation = () => {
  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  return (
    <NavigationBlock>
      {auth ? (
        <>
          <StyledLink to="/admin">어드민</StyledLink>
          <StyledLink to="/manage">광고주관리</StyledLink>
        </>
      ) : (
        <>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/register">회원가입</StyledLink>
        </>
      )}
    </NavigationBlock>
  );
};

export default Navigation;
