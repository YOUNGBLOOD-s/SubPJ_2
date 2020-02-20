import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
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

  ${props => {
    if (props.to === props.pathname) {
      return css({ backgroundColor: palette.grey[500] });
    }
  }}
`;

const ManagementAppBar = ({ user, location }) => {
  const { pathname } = location;
  return (
    <AppBarWrapper>
      <LinkWrapper>
        {user.username === 'admin' ? (
          <>
            <StyledLink pathname={pathname} to="/management">
              광고목록
            </StyledLink>
            <StyledLink pathname={pathname} to="/management/users">
              유저관리
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink pathname={pathname} to="/management">
              내정보
            </StyledLink>
            <StyledLink pathname={pathname} to="/management/product">
              광고관리
            </StyledLink>
            <StyledLink pathname={pathname} to="/management/grade">
              등급구매
            </StyledLink>
          </>
        )}
      </LinkWrapper>
    </AppBarWrapper>
  );
};

export default withRouter(ManagementAppBar);
