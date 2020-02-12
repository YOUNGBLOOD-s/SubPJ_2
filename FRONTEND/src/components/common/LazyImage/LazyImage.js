import React, { useEffect } from 'react';
import { withLazyImageContext } from './LazyImageContext';
import styled from 'styled-components';
import './lazyImage.css';

const qrImg = styled.img`
  z-index: 999;
  width: 20vh;
  height: 20vh;
  @media only screen and (max-width: 768px) {
    width: 15vh;
    height: 15vh;
  }
  position: absolute;
  right: 4%;
  bottom: 4%;
  padding: 7px;
  background: rgba(0, 0, 0, 0.5);
`;

const LazyImage = ({ src, isQR, lazyLoad }) => {
  // Calculate the aspect ratio
  // const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  // Update lazyLoad on mount and when src and/or aspectRatio changes

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, isQR, lazyLoad]);
  // Set the placeholder size on our wrapper div
  return (
    <div className="lazyImage">
      {/* Add data-src */}
      {isQR ? (
        <img className="lazyImage__qr" data-src={src} />
      ) : (
        <img className="lazyImage__img" data-src={src} />
      )}
    </div>
  );
};

export default withLazyImageContext(LazyImage);
