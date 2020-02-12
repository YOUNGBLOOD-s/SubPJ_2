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
import MaterialCard from '../common/MaterialCard';
import TitleBar from '../Detail/common/TitleBar';
import CaptionText from '../Detail/common/CaptionText';
import LoadingBackdrop from '../common/LoadingBackdrop';

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
          {/* NATION */}
          <TitleBar>나라 기본 설정</TitleBar>
          <CaptionText>광고중인 나라의 기본설정입니다.</CaptionText>
          <MaterialCard>
            <Nation nation={product.nation} />
          </MaterialCard>
          {/* OWNER */}
          <TitleBar>광고 소유자</TitleBar>
          <CaptionText>광고를 소유하고 있는 소유자의 정보입니다.</CaptionText>
          <MaterialCard>
            <Owner owner={product.owner} />
          </MaterialCard>
          {/* IMAGES */}
          <TitleBar>온도별 나라 대표이미지</TitleBar>
          <CaptionText>
            춥고, 더울때 보여줄 나라의 대표 이미지입니다.
          </CaptionText>
          <MaterialCard>
            <Images images={product.images} />
          </MaterialCard>
          {/* ROUTES/CONTENTS */}
          <TitleBar>나라의 일자별 경로</TitleBar>
          <CaptionText>광고중인 나라의 N일차 M번째 경로입니다.</CaptionText>
          <MaterialCard>
            <Contents contents={product.contents} />
          </MaterialCard>
          {/* MONTH */}
          <TitleBar>나라의 온/습도 테이블</TitleBar>
          <CaptionText>
            광고중인 나라의 기본 참고 온/습도 테이블입니다.
          </CaptionText>
          <MaterialCard>
            <Month month={product.month} />
          </MaterialCard>
        </DetailWrapper>
      ) : (
        <LoadingBackdrop loading={loading === undefined ? true : loading} />
      )}
    </DetailContainer>
  );
};

export default ProductDetail;
