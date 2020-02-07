import React, { useEffect } from 'react';
import ProductStepper from './ProductStepper';
import { useDispatch } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';

const AddProduct = () => {
  const dispatch = useDispatch();
  // 단계 초기화
  useEffect(() => {
    dispatch(initializeStep());
  }, [dispatch]);

  return (
    <div>
      <ProductStepper />
    </div>
  );
};

export default AddProduct;
