import React from 'react';
import styled from 'styled-components';
import MyProducts from './MyProducts/MyProducts';
import { useSelector } from 'react-redux';
import LoadingBackdrop from '../../common/LoadingBackdrop';
import PleasePurchase from '../../common/PleasePurchase';

const ProductManageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const ProductManage = () => {
  const { member, loading } = useSelector(({ user, loading }) => ({
    member: user.member,
    loading: loading['user/GET_CURRENT_USER'],
  }));

  return (
    <>
      {!loading && member ? (
        <ProductManageWrapper>
          {member && member.grade === 0 ? <PleasePurchase /> : <MyProducts />}
        </ProductManageWrapper>
      ) : (
        <LoadingBackdrop loading={loading} />
      )}
    </>
  );
};

export default ProductManage;
