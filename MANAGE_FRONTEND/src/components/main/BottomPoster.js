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
    font-size: 1rem;
  }
`;

const ManagementLink = styled(Link)`
  margin-top: 2rem;
  font-family: 'GmarketSansLight';
  border: 1px solid ${palette.grey[500]};
  color: ${palette.grey[700]};
  font-weight: bold;
  border-radius: 3px;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  :hover {
    background-color: ${palette.grey[100]};
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
        <ManagementLink to="/login">MANAGEMENT 시작하기</ManagementLink>
      </TextWrapper>
    </PosterWrapper>
  );
};

export default BottomPoster;
