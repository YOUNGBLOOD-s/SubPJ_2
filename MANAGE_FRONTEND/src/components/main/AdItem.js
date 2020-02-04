import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdCard = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0.7;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const AdItem = ({ ad }) => {
  // TODO: image 경로가 완료되면 교체합시다.
  const { name, speech, price, en_name, idx: id, image } = ad;
  return (
    <Link to={`/detail/${id}`}>
      <AdCard>
        <StyledImg
          src="https://images.unsplash.com/photo-1506760610100-1af6025cf0c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
          alt="ad-image"
        />
        <TextWrapper>
          <h1>
            {name}({en_name})
          </h1>
          <div>{price}원</div>
          <h3>{speech}</h3>
        </TextWrapper>
      </AdCard>
    </Link>
  );
};

export default AdItem;
