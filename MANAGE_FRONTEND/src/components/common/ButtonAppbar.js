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

const LoggedInWrapper = styled.div`
  display: flex;
  align-items: center;
  .username {
    font-family: 'GmarketSansLight';
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

const StyledButton = styled.div`
  font-family: 'GmarketSansLight';
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  :hover {
    background-color: ${palette.red[300]};
    transition-duration: 0.5s;
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
            <LoggedInWrapper>
              <div className="username">
                {user.username ? user.username : '알수없는유저'}
              </div>
              <StyledButton onClick={onLogout}>로그아웃</StyledButton>
            </LoggedInWrapper>
          ) : (
            <>
              <Link to="/register">
                <StyledButton>회원가입</StyledButton>
              </Link>
              <Link to="/login">
                <StyledButton>로그인</StyledButton>
              </Link>
            </>
          )}
        </ButtonWrapper>
      </NavBarWrapper>
    </NavBar>
  );
};

export default ButtonAppBar;
