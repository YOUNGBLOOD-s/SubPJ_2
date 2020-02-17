import React, { useEffect } from 'react';
import ProductStepper from './ProductStepper';
import { useDispatch, useSelector } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeForm } from '../../../../modules/form';
import styled from 'styled-components';

const AddProductContainer = styled.div``;

const AddProductWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const AddProduct = ({ history }) => {
  const dispatch = useDispatch();
  // TODO: 모든 단계가 완료되었다면 컴포넌트 시작시 초기화..
  useEffect(() => {
    dispatch(initializeStep());
    dispatch(initializeForm());
  }, [dispatch]);

  const { user, member } = useSelector(({ user }) => ({
    user: user.user,
    member: user.member,
  }));

  useEffect(() => {
    if (!user) {
      history.push('/');
    }

    if (member && member.grade === 0) {
      history.push('/manage/grade');
    }
  }, [user, member, history]);

  return (
    <AddProductContainer>
      <AddProductWrapper>
        <ProductStepper />
      </AddProductWrapper>
    </AddProductContainer>
  );
};

export default AddProduct;
