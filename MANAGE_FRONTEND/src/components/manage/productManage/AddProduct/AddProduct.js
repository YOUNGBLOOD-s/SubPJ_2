import React, { useEffect } from 'react';
import ProductStepper from './ProductStepper';
import { useDispatch, useSelector } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeForm } from '../../../../modules/form';
import styled from 'styled-components';
import AddProductBar from './AddProductBar';

const AddProductContainer = styled.div`
  padding: 3rem 0;
  height: 100%;
`;

const AddProductWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const AddProduct = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeStep());
    dispatch(initializeForm());
  }, [dispatch]);

  const { user, member } = useSelector(({ user }) => ({
    user: user.user,
    member: user.member,
  }));

  useEffect(() => {
    //  멤버정보를 못구하면 홈으로
    if (!user) {
      history.push('/');
    }
    // 등급이 0인경우 구매하고 오라고하자
    if (member && member.grade === 0) {
      history.push('/management/grade');
    }
  }, [user, member, history]);

  return (
    <AddProductContainer>
      <AddProductWrapper>
        <AddProductBar />
        <ProductStepper />
      </AddProductWrapper>
    </AddProductContainer>
  );
};

export default AddProduct;
