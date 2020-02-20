import React, { useEffect } from "react";
import { withLazySoundContext } from "./LazySoundContext";
import "./lazyImage.css";

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
      <audio
        className="lazySound__sound"
        controls="controls"
        autoPlay="autoPlay"
        style={{ display: "none" }}
        data-src={src}
      />
    </div>
  );
};

export default withLazySoundContext(LazySound);
