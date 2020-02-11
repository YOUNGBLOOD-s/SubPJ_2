import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../modules/product';
import Owner from './Owner';
import Images from './Images';
import Month from './Month';
import Nation from './Nation';
import Contents from './Contents';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 1rem;
`;
const DetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductDetail = ({ match }) => {
  const { id } = match.params;
  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();
  const { product, loading } = useSelector(({ product, loading }) => ({
    product: product.product,
    loading: loading['product/GET_PRODUCT'],
  }));

  useEffect(() => {
    dispatch(getProduct({ id, token }));
  }, [id, token, dispatch]);
  return (
    <DetailContainer>
      {!loading && product ? (
        <DetailWrapper>
          <Nation nation={product.nation} />
          <Owner owner={product.owner} />
          <Images images={product.images} />
          <Month month={product.month} />
          <Contents contents={product.contents} />
        </DetailWrapper>
      ) : null}
    </DetailContainer>
  );
};

export default ProductDetail;
