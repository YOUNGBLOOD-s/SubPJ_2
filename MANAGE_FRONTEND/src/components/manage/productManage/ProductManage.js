import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyProducts from './MyProducts/MyProducts';
import { useSelector } from 'react-redux';

const ProductManageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductManage = ({ history }) => {
  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));

  useEffect(() => {
    if (member && member.grade === 0) {
      history.push('/manage/grade');
    }
  }, [member, history]);

  return (
    <ProductManageWrapper>
      <MyProducts />
    </ProductManageWrapper>
  );
};

export default ProductManage;
