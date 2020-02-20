import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AppBarWrapper = styled.div`
  background-color: ${palette.grey[200]};
  padding: 0.5rem;
`;
const LinkWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const StyledLink = styled(Link)`
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  :hover {
    background-color: ${palette.grey[500]};
    transition-duration: 0.5s;
  }
`;

const ManagementAppBar = ({ user }) => {
  return (
    <AppBarWrapper>
      <LinkWrapper>
        {user.username === 'admin' ? (
          <>
            <StyledLink to="/management">광고목록</StyledLink>
            <StyledLink to="/management/users">유저관리</StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/management">내정보</StyledLink>
            <StyledLink to="/management/product">광고관리</StyledLink>
            <StyledLink to="/management/grade">등급구매</StyledLink>
          </>
        )}
      </LinkWrapper>
    </AppBarWrapper>
  );
};

export default ManagementAppBar;
