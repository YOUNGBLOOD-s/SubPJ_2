import React from 'react';
import styled from 'styled-components';
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';
import { useState } from 'react';
import ContentUpdateForm from './ContentUpdateForm';

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

const ContentItem = ({ content, user }) => {
  const { day, seq, title, detail, image, tofrom, transport } = content;
  const [updating, setUpdating] = useState(false);
  return (
    <ContentsWrapper>
      {updating ? (
        <ContentUpdateForm content={content} setUpdating={setUpdating} />
      ) : (
        <component.Grid container>
          <component.Grid item xs={user && user.username === 'admin' ? 9 : 12}>
            <component.Typography variant="h6">
              {day}일차 {seq}번째 [{title}]
            </component.Typography>
          </component.Grid>
          {user && user.username === 'admin' && (
            <component.Grid item xs={3}>
              <component.Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => setUpdating(true)}
              >
                수정
              </component.Button>
            </component.Grid>
          )}
          <component.Grid item xs={12}>
            <ImageWrapper>
              <StyledImg src={image} />
            </ImageWrapper>
            <component.Typography variant="body1">
              {detail}
            </component.Typography>
          </component.Grid>
          <div>
            <div>TOFROM - {tofrom}</div>
            <div>이동수단 : {transport}</div>
          </div>
        </component.Grid>
      )}
    </ContentsWrapper>
  );
};

export default ContentItem;
