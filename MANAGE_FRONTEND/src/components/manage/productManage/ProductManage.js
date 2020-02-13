import React from 'react';
import styled from 'styled-components';
import MyProducts from './MyProducts/MyProducts';

const ProductManageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductManage = () => {
  return (
    <ProductManageWrapper>
      <MyProducts />
    </ProductManageWrapper>
  );
};

export default ProductManage;
