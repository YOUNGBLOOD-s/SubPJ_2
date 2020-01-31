import React from 'react';
import cx from 'classnames';
import SliderContext from './context';
import ShowDetailsButton from './ShowDetailsButton';
import Mark from './Mark';
import './Item.scss';

const Item = ({ detail }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === detail.id;

      const path = `${process.env.PUBLIC_URL}/static/img/코타키나발루.jpg`;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={path} alt="" />
          {/* <img src={detail.img} alt="" /> */}
          <ShowDetailsButton onClick={() => onSelectSlide(detail)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
