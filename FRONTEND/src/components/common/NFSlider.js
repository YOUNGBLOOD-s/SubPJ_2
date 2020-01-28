import React, { useEffect, useState } from 'react';
import Slider from '../NFSlider/NetflixSlider';

const movies = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: '1983',
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education',
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite',
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror',
  },
];

var timer = undefined;

const NFSlider = ({ data, setOpen }) => {
  const [current, setCurrent] = useState(1);

  const timerTerm = 3000;

  const setTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOpen(false);
    }, timerTerm);
    console.log(timer);
  };

  useEffect(() => {
    setTimer();
  });

  useEffect(() => {
    setTimer();
  }, [current]);
  return (
    <div className="app">
      <Slider activeSlide={movies[data.id]} setCurrent={setCurrent}>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
};

export default NFSlider;
