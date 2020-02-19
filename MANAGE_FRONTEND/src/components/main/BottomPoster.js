import React from 'react';
import styled from 'styled-components';
import getImageUrl from '../../lib/utill/getImageUrl';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const PosterWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ImageWrapper = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
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
  font-family: 'Handon3gyeopsal600g';
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 3rem;
  font-family: 'Handon3gyeopsal600g';
  background-color: ${palette.theme[200]};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: white;
  :hover {
    background-color: ${palette.theme[400]};
    transition-duration: 0.5s;
  }
`;

const BottomPoster = () => {
  return (
    <PosterWrapper>
      <ImageWrapper>
        <StyledImage src={getImageUrl('static', 'bottomposter.jpg')} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <Text>광고 통계 및 매니지먼트,</Text>
        <Text>사용자의 니즈를 채워주는 맞춤형 광고</Text>
        <Text>지금 바로 시작하세요</Text>
        <StyledLink to="/login">로그인</StyledLink>
      </TextWrapper>
    </PosterWrapper>
  );
};

export default BottomPoster;
