import React, { useEffect, useState, createRef, useRef } from 'react';
import './Content.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const Weather = styled.h2`
  padding: 0;
  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  @media only screen and (max-width: 768px) {
    font-size: 90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 80%;
  }
`;

const EnTitle = styled.div`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0rem 0.8rem;
    font-size: 90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 80%;
  }
  font-weight: bold;
  color: #aaaaaa;
  text-align: left;
  padding: 0.8rem 0.8rem;
`;

const Contents = styled.div`
  width: 30rem;
  @media only screen and (max-width: 1500px) {
    font-size: 95%;
    width: 20rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 15rem;
    font-size: 92%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 95%;
  }
`;

const Price = styled.div`
  color: white;
  padding: 4rem 0 0 0;
  font-size: 1.8rem;
  text-decoration: underline;
  @media only screen and (max-width: 1200px) {
    font-size: 92%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    position: fixed;
    top: 2rem;
    left: 70%;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 94%;
  }
`;

const Content = ({ detail }) => {
  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{
            backgroundImage: `url(${detail.img})`,
          }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">
            <TitleWrapper>
              <Title>{detail.name}</Title>
              <EnTitle>{detail.en_name}</EnTitle>
            </TitleWrapper>
          </div>
          <div className="content__description">
            <WeatherWrapper>
              <Weather>
                <WbSunnyIcon /> {detail.temp}&deg;C&nbsp;&nbsp;&nbsp;
              </Weather>
              <Weather>
                <OpacityIcon /> {detail.humid} %
              </Weather>
            </WeatherWrapper>
            <Contents>{detail.content}</Contents>
            <Price>금액 : {detail.price.toLocaleString()}원</Price>
          </div>
        </div>
        {/* <button className="content__close" onClick={onClose}>
        <IconCross />
      </button> */}
      </div>
    </div>
  );
};

export default Content;
