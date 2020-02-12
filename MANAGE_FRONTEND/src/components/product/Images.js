import React from 'react';
import styled from 'styled-components';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.grey[200]};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  .image-text {
    text-align: center;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .image {
    max-height: 300px;
    object-fit: cover;
  }
`;

// type : 정도 (1-추움, 2-더움, 3-밝음, 4-어두움)
const typeName = {
  1: '추운 이미지',
  2: '더운 이미지',
  3: '밝은 이미지',
  4: '어두운 이미지',
};

const Images = ({ images }) => {
  return (
    <component.Grid container spacing={1}>
      {images.map(({ idx, nation, type, url }) => (
        <component.Grid item xs={12} sm={6} key={idx}>
          <ImageWrapper>
            <div className="image-text">{typeName[type]}</div>
            <img className="image" src={url} alt={typeName[type]} />
          </ImageWrapper>
        </component.Grid>
      ))}
    </component.Grid>
  );
};

export default Images;
