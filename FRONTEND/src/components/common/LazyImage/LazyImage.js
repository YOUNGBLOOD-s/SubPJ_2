import React, { useEffect } from 'react';
import { withLazyImageContext } from './LazyImageContext';
import './lazyImage.css';

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  // Calculate the aspect ratio
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  // Update lazyLoad on mount and when src and/or aspectRatio changes
  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, aspectRatio, lazyLoad]);
  // Set the placeholder size on our wrapper div
  return (
    <div className="lazyImage" style={{ paddingTop }}>
      {/* Add data-src */}
      <img className="lazyImage__img" data-src={src} />
    </div>
  );
};

export default withLazyImageContext(LazyImage);
