import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Logo from '../common/Logo';

const PosterWrapper = styled.div`
  height: 30vh;
  background-color: ${palette.grey[300]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const MainPoster = () => {
  return (
    <PosterWrapper>
      <Text>마치 네곁에 있는것 처럼</Text>
      <Text>나에게 딱 맞는 광고 플랫폼</Text>
      <Logo />
    </PosterWrapper>
  );
};

export default MainPoster;
