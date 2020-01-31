import React from 'react';
import './Content.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';

const Content = ({ detail, onClose }) => {
  const WeatherWrapper = styled.div`
    color: white;
    font-size: 1.2rem;
    @media only screen and (max-width: 768px) {
      display: flex;
      padding: 0;
      font-size: 1rem;
    }
  `;
  const Weather = styled.h2`
    padding: 0;
    @media only screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  `;

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
          <div className="content__title">{detail.name}</div>
          <div className="content__description">
            <WeatherWrapper>
              <Weather>
                <WbSunnyIcon /> {detail.temp}&deg;C&nbsp;&nbsp;&nbsp;
              </Weather>
              <Weather>
                <OpacityIcon /> {detail.humid} %
              </Weather>
            </WeatherWrapper>
            {detail.content}
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
