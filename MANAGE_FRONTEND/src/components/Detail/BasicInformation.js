import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Fab from '@material-ui/core/Fab';

const BasicInformationBlock = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div``;

const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  padding: 2rem 1rem;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.7);
`;

const SlideMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  .title_en {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 2rem;
    font-style: italic;
    color: ${palette.grey[500]};
  }
  .title {
    font-weight: bold;
    font-family: 'Nanum Myeongjo', serif;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: ${palette.theme[400]};
  }
`;

const CountryInfoWrapper = styled.div`
  text-align: center;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const IconTextBox = styled.div`
  font-size: 1.3rem;
  :first-child {
    margin-right: 1rem;
  }
  .text {
    margin-left: 0.5rem;
  }
`;

const SlideIcon = styled(Fab)`
  display: flex;
  justify-content: cetner;
  .text {
    margin-left: 0.5rem;
  }
`;

const BasicInformation = ({ country }) => {
  const { name, thumbnail, en_name, temp, humid } = country;
  const onSlideClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  return (
    <BasicInformationBlock>
      <ImageWrapper>
        <StyledImg src={thumbnail} alt="썸네일" />
      </ImageWrapper>
      <TextWrapper>
        <StyledTitle>
          <div className="title_en">{en_name}</div>
          <div className="title">{name}</div>
        </StyledTitle>
        <CountryInfoWrapper>
          <IconTextBox>
            <i
              className="fas fa-thermometer-three-quarters"
              style={{ color: palette.red[300] }}
            ></i>
            <span className="text">{temp} ℃</span>
          </IconTextBox>
          <IconTextBox>
            <i className="fas fa-tint" style={{ color: palette.blue[200] }}></i>
            <span className="text">{humid}%</span>
          </IconTextBox>
        </CountryInfoWrapper>
      </TextWrapper>
      <SlideMeWrapper>
        <SlideIcon color="secondary" variant="extended" onClick={onSlideClick}>
          <i className="fas fa-angle-double-down"></i>
          <span className="text">스크롤</span>
        </SlideIcon>
      </SlideMeWrapper>
    </BasicInformationBlock>
  );
};

export default BasicInformation;
