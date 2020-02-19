import React, { useEffect } from 'react';
import { withLazySoundContext } from './LazySoundContext';
import Sound from 'react-sound';
import './lazyImage.css';

const LazySound = ({ src, lazyLoad }) => {
  // Calculate the aspect ratio
  // const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  // Update lazyLoad on mount and when src and/or aspectRatio changes

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, lazyLoad]);
  // Set the placeholder size on our wrapper div
  return (
    <div className="lazySound">
      {/* Add data-src */}
      <Sound
        className="lazySound__sound"
        url={src}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        onLoading={Sound.handleSongLoading}
        onPlaying={Sound.handleSongPlaying}
        onFinishedPlaying={Sound.handleSongFinishedPlaying}
      />
    </div>
  );
};

export default withLazySoundContext(LazySound);
