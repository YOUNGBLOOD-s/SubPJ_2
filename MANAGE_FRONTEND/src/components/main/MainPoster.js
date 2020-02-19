import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import getImageUrl from '../../lib/utill/getImageUrl';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

const ManagementLink = styled(Link)`
  position: absolute;
  font-family: 'GmarketSansLight';
  border: 1px solid ${palette.grey[400]};
  color: ${palette.grey[700]};
  font-weight: bold;
  border-radius: 3px;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  right: 2%;
  top: 5%;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    right: 0;
    transform: translate(-50%, 0);
  }
  :hover {
    background-color: ${palette.grey[200]};
    transition-duration: 0.5s;
  }
`;

const SlideBtn = styled.div`
  font-family: 'GmarketSansLight';
  border: 2px solid black;
  font-weight: bold;
  border-radius: 1.2rem;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  :hover {
    background-color: ${palette.grey[200]};
    transition-duration: 0.5s;
  }
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
`;

const MainPoster = () => {
  const onSlideClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
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
      <SlideBtn onClick={onSlideClick}>
        <i className="fas fa-angle-double-down"></i>
        {'  '}SLIDE
      </SlideBtn>
      <ManagementLink to="/login">MANAGEMENT ></ManagementLink>
    </PosterWrapper>
  );
};

export default MainPoster;
