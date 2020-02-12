import React from 'react';
import styled from 'styled-components';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';

const ContentsWrapper = styled.div`
  border: 1px solid ${palette.grey[200]};
  border-radius: 3px;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  margin: 1rem 0;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 3px;
`;

const Contents = ({ contents }) => {
  return (
    <component.Grid container spacing={1}>
      {contents.map(
        ({ idx, day, seq, title, detail, image, tofrom, transport }) => (
          <component.Grid item xs={12} key={idx}>
            <ContentsWrapper>
              <component.Typography variant="h6">
                {day}일차 {seq}번째 [{title}]
              </component.Typography>
              <ImageWrapper>
                <StyledImg src={image} />
              </ImageWrapper>
              <component.Typography variant="body1">
                {detail}
              </component.Typography>
              <div>
                <div>TOFROM - {tofrom}</div>
                <div>이동수단 : {transport}</div>
              </div>
            </ContentsWrapper>
          </component.Grid>
        ),
      )}
    </component.Grid>
  );
};

export default Contents;
