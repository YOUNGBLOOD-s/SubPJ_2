import React, { useEffect, useState } from 'react';
import Slider from '../NFSlider/NetflixSlider';
import { List } from 'immutable';

let timer = undefined;
let datas = null;
const NFSlider = ({ details, setOpen, open }) => {
  const [current, setCurrent] = useState(1);

  if (datas === null) datas = details;

  // debug
  // const timerTerm = 30000;
  const timerTerm = 15000;

  const setTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOpen(false);
    }, timerTerm);
  };

  useEffect(() => {
    setTimer();
  }, []);

  useEffect(() => {
    setTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    if (open === true && datas === null) {
      datas = List(details).toJS();
    } else if (open === false) {
      datas = null;
    }
  }, [open]);

  return (
    <div className="app">
      <Slider activeSlide={datas[0]} setCurrent={setCurrent}>
        {datas.map(detail => (
          <Slider.Item detail={detail} key={detail.id}></Slider.Item>
        ))}
      </Slider>
    </div>
  );
};

export default NFSlider;
