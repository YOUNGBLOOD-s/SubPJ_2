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

const BasicInformation = ({ country }) => {
  const { name, thumbnail, price, category } = country;
  return (
    <BasicInformationBlock>
      <ImageWrapper>
        <StyledImg src={thumbnail} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <Typography variant="h3">
          {name}({category})
        </Typography>
        <h2>{price}원</h2>
      </TextWrapper>
    </BasicInformationBlock>
  );
};

export default BasicInformation;
