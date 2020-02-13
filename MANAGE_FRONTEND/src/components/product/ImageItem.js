import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import ImageUpdateForm from './ImageUpdateForm';
import component from '../../lib/material/component';

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0.5rem;
  border: 1px solid ${palette.grey[200]};

  .image-text {
    text-align: center;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

// type : 정도 (1-추움, 2-더움, 3-밝음, 4-어두움)
const typeName = {
  1: '🥶 추운 이미지',
  2: '🥵 더운 이미지',
  3: '🌞 밝은 이미지',
  4: '🌚 어두운 이미지',
};

const ImageItem = ({ image }) => {
  const [updating, setUpdating] = useState(false);

  const { type, url } = image;

  return (
    <ImageWrapper>
      <div className="image-text">{typeName[type]}</div>
      {updating ? (
        <ImageUpdateForm image={image} setUpdating={setUpdating} />
      ) : (
        <component.Grid container spacing={1}>
          <component.Grid item xs={12}>
            <img className="image" src={url} alt={typeName[type]} />
          </component.Grid>
          <component.Grid item xs={12}>
            <component.Button
              variant="outlined"
              color="primary"
              onClick={() => setUpdating(true)}
              fullWidth
            >
              수정
            </component.Button>
          </component.Grid>
        </component.Grid>
      )}
    </ImageWrapper>
  );
};

export default ImageItem;
