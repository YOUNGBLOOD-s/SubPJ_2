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
import { removeList } from '../../lib/api/ad';
import component from '../../lib/material/component';
import DeleteAlertDialog from '../common/DeleteAlertDialog';

const DetailContainer = styled.div`
  padding: 1rem;
`;

const DetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductDetail = ({ match, history }) => {
  const { id } = match.params;
  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();
  const { product, loading, user } = useSelector(
    ({ product, loading, user }) => ({
      product: product.product,
      loading: loading['product/GET_PRODUCT'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(getProduct({ id, token }));
  }, [id, token, dispatch]);

  const onRemoveAd = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      await removeList({ token, id });
      history.push('/admin');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DetailContainer>
      {!loading && product ? (
        <DetailWrapper>
          {/* OWNER */}
          {product.owner && (
            <>
              <TitleBar>광고 소유자</TitleBar>
              <CaptionText>
                광고를 소유하고 있는 소유자의 정보입니다.
              </CaptionText>
              <MaterialCard>
                <Owner owner={product.owner} />
              </MaterialCard>
            </>
          )}

          {/* NATION */}
          {product.nation && (
            <>
              <TitleBar>나라 기본 설정</TitleBar>
              <CaptionText>광고중인 나라의 기본설정입니다.</CaptionText>
              <MaterialCard>
                <Nation nation={product.nation} user={user} />
              </MaterialCard>
            </>
          )}

          {/* IMAGES */}
          {product.images && (
            <>
              <TitleBar>온도별 나라 대표이미지</TitleBar>
              <CaptionText>
                춥고, 더울때 보여줄 나라의 대표 이미지입니다.
              </CaptionText>
              <MaterialCard>
                <Images images={product.images} user={user} />
              </MaterialCard>
            </>
          )}

          {/* ROUTES/CONTENTS */}
          {product.contents && (
            <>
              <TitleBar>나라의 일자별 경로</TitleBar>
              <CaptionText>광고중인 나라의 N일차 M번째 경로입니다.</CaptionText>
              <MaterialCard>
                <Contents contents={product.contents} user={user} />
              </MaterialCard>
            </>
          )}

          {/* MONTH */}
          {product.month && (
            <>
              <TitleBar>나라의 온/습도 테이블</TitleBar>
              <CaptionText>
                광고중인 나라의 기본 참고 온/습도 테이블입니다.
              </CaptionText>
              <MaterialCard>
                <Month month={product.month} user={user} />
              </MaterialCard>
            </>
          )}

          {/* DELETE */}
          {user && user.username === 'admin' && (
            <DeleteAlertDialog>
              {/* children으로 삭제 버튼 넣어줌 */}
              <component.Button onClick={onRemoveAd} color="secondary">
                삭제
              </component.Button>
            </DeleteAlertDialog>
          )}
        </DetailWrapper>
      ) : (
        <LoadingBackdrop loading={loading === undefined ? true : loading} />
      )}
    </DetailContainer>
  );
};

export default ProductDetail;
