import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import SliderContext from './context';
import Content from './Content';
import SlideButton from './SlideButton';
import SliderWrapper from './SliderWrapper';
import useSliding from './useSliding';
import useSizeElement from './useSizeElement';
import './Slider.scss';

const Slider = ({ children, activeSlide, setCurrent }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, React.Children.count(children));

  const handleSelect = detail => {
    setCurrentSlide(detail);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  useEffect(() => {
    setCurrent(currentSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={cx('slider', { 'slider--open': currentSlide != null })}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content detail={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
