import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Handon3gyeopsal600g';
  padding: 1rem;
  .error {
    font-size: 3rem;
    color: ${palette.red[600]};
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .text {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const StyledLink = styled(Link)`
  margin-top: 2rem;
  font-size: 2rem;
  color: ${palette.theme[200]};
  text-decoration: underline;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div className="error">404</div>
      <div className="error">NOT FOUND</div>
      <div className="text">
        <span role="img" aria-label="img">
          🤔
        </span>{' '}
        페이지를 찾을 수 없습니다!
      </div>
      <StyledLink to="/">메인페이지로</StyledLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
