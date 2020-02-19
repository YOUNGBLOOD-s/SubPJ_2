import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import getImageUrl from '../../lib/utill/getImageUrl';

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
        <StyledImage src={getImageUrl('static', 'mainposter.jpg')} alt="" />
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
