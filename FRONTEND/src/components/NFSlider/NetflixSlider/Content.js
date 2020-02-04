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
    margin-bottom: 10px;
  }
`;

const Title = styled.div`
  @media only screen and (max-width: 768px) {
    font-size: 90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 80%;
  }
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
    font-size: 90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 80%;
  }
`;

const Content = ({ detail }) => {
  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          // style={{ backgroundImage: `url(${detail.img})` }}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/코타키나발루.jpg)`,
          }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">
            <Title>{detail.name}</Title>
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
