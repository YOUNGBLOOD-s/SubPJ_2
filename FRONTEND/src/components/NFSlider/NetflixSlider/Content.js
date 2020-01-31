import React from 'react';
import './Content.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';

const Content = ({ detail, onClose }) => {
  const Weather = styled.h2`
    color: white;
  `;
  console.log(detail); // debug
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
            <Weather>
              <WbSunnyIcon /> {detail.temp}&deg;C&nbsp;&nbsp;&nbsp;
            </Weather>
            <Weather>
              <OpacityIcon /> {detail.humid} %
            </Weather>
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
