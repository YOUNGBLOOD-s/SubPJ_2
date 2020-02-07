import React from 'react';
import component from '../../../../lib/material/component';
import styled from 'styled-components';
import axios from 'axios';
const MyProductWrapper = styled.div`
  border: 3px solid black;
`;

const MyProduct = ({ ad }) => {
  const { ko_name } = ad;

  const onRemoveAd = () => {
    console.log('삭제시도..');
    const token = sessionStorage.getItem('access_token');
    // TODO: ID를 넣고 삭제 시도해보기
    // axios.delete('/api/man/nation/delete/',{},{headers:{Authorization :token}})
  };

  const onUpdateAd = () => {
    console.log('업데이트 시도. 모달로 띄울까..? 나중에 해용');
  };

  return (
    <MyProductWrapper>
      <h4>{ko_name}</h4>
      <component.Button onClick={onRemoveAd}>삭제</component.Button>
      <component.Button onClick={onUpdateAd}>수정</component.Button>
    </MyProductWrapper>
  );
};

export default MyProduct;
