import React, { useEffect } from 'react';
import ProductStepper from './ProductStepper';
import { useDispatch } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeProduct } from '../../../../modules/product';

const AddProduct = () => {
  const dispatch = useDispatch();
  // TODO: 모든 단계가 완료되었다면 컴포넌트 시작시 초기화.. 에러 안나는지 확인
  useEffect(() => {
    // dispatch(initializeStep());
    // dispatch(initializeProduct());
  }, [dispatch]);

  return (
    <div>
      <ProductStepper />
    </div>
  );
};

export default AddProduct;
