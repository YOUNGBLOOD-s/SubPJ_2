import React from 'react';
import { Link } from 'react-router-dom';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';
import Logo from './Logo';
import styled from 'styled-components';

const NavBar = styled.div`
  background-color: ${palette.theme[100]};
`;

const NavBarWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin-right: 1rem;
  a {
    margin-right: 1rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

const ButtonAppBar = ({ user, onLogout }) => {
  return (
    <NavBar>
      <NavBarWrapper>
        <Link to="/management">
          <Logo />
        </Link>
        <ButtonWrapper>
          {user ? (
            <>
              <span>{user.username}</span>
              <component.Button color="inherit" onClick={onLogout}>
                로그아웃
              </component.Button>
            </>
          ) : (
            <>
              <Link to="/register">
                <component.Button color="inherit">회원가입</component.Button>
              </Link>
              <Link to="/login">
                <component.Button color="inherit">로그인</component.Button>
              </Link>
            </>
          )}
        </ButtonWrapper>
      </NavBarWrapper>
    </NavBar>
  );
};

export default ButtonAppBar;
