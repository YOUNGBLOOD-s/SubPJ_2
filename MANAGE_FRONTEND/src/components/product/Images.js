import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
`;

const Images = ({ images }) => {
  return (
    <ImagesContainer>
      <h4>온도별 이미지</h4>
      {images.map(({ idx, nation, type, url }) => (
        <ImageWrapper key={idx}>
          <div>{idx}</div>
          <div>{nation}</div>
          <div>{type}</div>
          <div>{url}</div>
        </ImageWrapper>
      ))}
    </ImagesContainer>
  );
};

export default Images;
