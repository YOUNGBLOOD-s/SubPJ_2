import React, { useEffect } from 'react';
import ProductStepper from './ProductStepper';
import { useDispatch } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeForm } from '../../../../modules/form';
import styled from 'styled-components';

const AddProductContainer = styled.div``;

const AddProductWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const AddProduct = () => {
  const dispatch = useDispatch();
  // TODO: 모든 단계가 완료되었다면 컴포넌트 시작시 초기화.. 에러 안나는지 확인
  useEffect(() => {
    dispatch(initializeStep());
    dispatch(initializeForm());
  }, [dispatch]);

  return (
    <AddProductContainer>
      <AddProductWrapper>
        <ProductStepper />
      </AddProductWrapper>
    </AddProductContainer>
  );
};

export default AddProduct;
