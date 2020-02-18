import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Logo from '../common/Logo';

const Wrapper = styled.div`
  border: 3px solid ${palette.grey[300]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0.5rem 2rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${palette.grey[100]};
    transition-duration: 0.5s;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 1.5rem;
`;

const GoToMainButton = ({ history }) => {
  const goHome = () => {
    history.push('/');
  };
  return (
    <Wrapper onClick={goHome}>
      <Logo />
      <Text>
        <span role="img" aria-label="img">
          🔮
        </span>{' '}
        다른 상품 살펴보기
      </Text>
    </Wrapper>
  );
};

export default withRouter(GoToMainButton);
