import React from 'react';
import component from '../../lib/material/component';
import ImageItem from './ImageItem';

const Images = ({ images }) => {
  return (
    <component.Grid container spacing={1}>
      {images.map(image => (
        <component.Grid item xs={12} sm={6} key={image.idx}>
          <ImageItem image={image} />
        </component.Grid>
      ))}
    </component.Grid>
  );
};

export default Images;
