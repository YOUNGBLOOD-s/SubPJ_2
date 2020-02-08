import React from 'react';
import styled from 'styled-components';
import MyProducts from './MyProducts/MyProducts';
import AddProduct from './AddProduct/AddProduct';
import ImageUploader from '../../common/ImageUploader';

const ProductManageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductManage = () => {
  return (
    <div>
      <h1>제품 관리</h1>
      <h4>이미지 업로드 테스트</h4>
      <ImageUploader />
      <h2>광고주가 광고하고 있는 제품의</h2>
      <h2>목록보기, 항목 삭제하기, 항목 수정하기, 항목 추가하기</h2>
      <ProductManageWrapper>
        <MyProducts />
        <AddProduct />
      </ProductManageWrapper>
    </div>
  );
};

export default ProductManage;
