import React, { useEffect, useState } from 'react';
import Slider from '../NFSlider/NetflixSlider';

var timer = undefined;

const NFSlider = ({ details, setOpen }) => {
  const [current, setCurrent] = useState(1);

  // debug
  // const timerTerm = 30000;
  const timerTerm = 300000;

  const setTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOpen(false);
    }, timerTerm);
  };

  useEffect(() => {
    setTimer();
  });

  useEffect(() => {
    setTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="app">
      <Slider activeSlide={details[0]} setCurrent={setCurrent}>
        {details.map(detail => (
          <Slider.Item detail={detail} key={detail.id}></Slider.Item>
        ))}
      </Slider>
    </div>
  );
};

export default NFSlider;
