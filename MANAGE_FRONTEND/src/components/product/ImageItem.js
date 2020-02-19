import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import ImageUpdateForm from './ImageUpdateForm';
import component from '../../lib/material/component';
import getImageUrl from '../../lib/utill/getImageUrl';

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

// type : 정도 (1-밝고 더움, 2-밝고 추움, 3-어둡고 더움, 4-어둡고 추움)
const typeName = {
  1: '밝고 더운 이미지',
  2: '밝고 추운 이미지',
  3: '어둡고 더운 이미지',
  4: '어둡고 추운 이미지',
};

const ImageItem = ({ image, user }) => {
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
            <img
              className="image"
              src={getImageUrl('sm', url)}
              alt={typeName[type]}
            />
          </component.Grid>
          {user && user.username === 'admin' && (
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
          )}
        </component.Grid>
      )}
    </ImageWrapper>
  );
};

export default ImageItem;
