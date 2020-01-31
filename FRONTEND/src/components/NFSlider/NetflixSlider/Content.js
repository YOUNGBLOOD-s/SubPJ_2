import React from 'react';
import './Content.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';

const Content = ({ data, onClose }) => {
  const Weather = styled.h2`
    color: white;
  `;
  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{ backgroundImage: `url(${data.img})` }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">{data.name}</div>
          <div className="content__description">
            <Weather>
              <WbSunnyIcon /> {{data.temp}}&deg;C&nbsp;&nbsp;&nbsp;
            </Weather>
            <Weather>
              <OpacityIcon /> {{data.humid}} %
            </Weather>
            {{data.content}}
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
