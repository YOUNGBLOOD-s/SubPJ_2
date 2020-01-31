import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const BasicInformationBlock = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div``;

const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
`;

const StyledTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
`;

const BasicInformation = ({ country }) => {
  console.log(country);
  const { id, name, thumbnail, price, category } = country;
  return (
    <BasicInformationBlock>
      <ImageWrapper>
        {/* FIXME: 썸네일 제대로 받아지면 이미지 변경 */}
        <StyledImg
          src={
            'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
          }
          alt="썸네일"
        />
      </ImageWrapper>
      <TextWrapper>
        <StyledTitle>
          {name} ({category})
        </StyledTitle>
        {/* <h2>{price}원</h2> */}
      </TextWrapper>
    </BasicInformationBlock>
  );
};

export default BasicInformation;
