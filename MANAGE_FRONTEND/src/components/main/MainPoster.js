import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';

const PosterWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: 95vh;
  opacity: 0.3;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  /* font-family: 'MapoFlowerIsland'; */
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const MainPoster = () => {
  return (
    <PosterWrapper>
      <ImageWrapper>
        <StyledImage
          src="https://images.unsplash.com/photo-1558285549-2a06f9a5fe65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </ImageWrapper>
      <TextWrapper>
        <Text>마치 네 곁에 있는 것처럼,</Text>
        <Text>나에게 딱 맞는 광고 플랫폼</Text>
        <Logo />
      </TextWrapper>
    </PosterWrapper>
  );
};

export default MainPoster;
