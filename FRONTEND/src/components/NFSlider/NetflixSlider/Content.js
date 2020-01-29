import React from 'react';
import './Content.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';

const Content = ({ movie, onClose }) => {
  const Weather = styled.h2`
    color: white;
  `;
  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{ backgroundImage: `url(${movie.imageBg})` }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">{movie.title}</div>
          <div className="content__description">
            <Weather>
              <WbSunnyIcon /> 17&deg;C ~ -3&deg;C&nbsp;&nbsp;&nbsp;
            </Weather>
            <Weather>
              <OpacityIcon /> 0 %
            </Weather>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis
            leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus
            vestibulum enim quis quam congue, non fringilla orci placerat.
            Praesent sollicitudin
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
