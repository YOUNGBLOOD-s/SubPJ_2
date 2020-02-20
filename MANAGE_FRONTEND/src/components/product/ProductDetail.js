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
import MonthForm from './MonthForm';
import Counsels from './Counsels';
import StatisticalDetail from '../manage/Statistical/StatisticalDetail';

const DetailContainer = styled.div`
  padding: 1rem;
`;

const DetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const NoData = ({ children }) => {
  return <div>{children ? <div>{children}</div> : <div>NO-DATA</div>}</div>;
};

const ProductDetail = ({ match, history }) => {
  const { id } = match.params;
  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();

  const { product, loading, user, member } = useSelector(
    ({ product, loading, user }) => ({
      product: product.product,
      loading: loading['product/GET_PRODUCT'],
      user: user.user,
      member: user.member,
    }),
  );

  useEffect(() => {
    if (member && member.grade === 0) {
      history.push('/management/grade');
    }
  }, [member, history]);

  useEffect(() => {
    if (user && user.username !== 'admin') {
      if (product && user.username !== product.owner.username) {
        history.push('/management');
      }
    }
  }, [user, product, history]);

  useEffect(() => {
    dispatch(getProduct({ id, token }));
  }, [id, token, dispatch]);

  const onRemoveAd = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      await removeList({ token, id });
      history.push('/management');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DetailContainer>
      {!loading && product ? (
        <DetailWrapper>
          {/* OWNER */}
          <TitleBar>광고 소유자</TitleBar>
          <CaptionText>광고 소유자의 정보입니다.</CaptionText>
          <MaterialCard>
            {product.owner ? <Owner owner={product.owner} /> : <NoData />}
          </MaterialCard>
          {/* COUNSEL */}
          {product.counselList ? (
            <Counsels counsels={product.counselList} user={user} />
          ) : (
            <NoData>상담예약이 없습니다.</NoData>
          )}

          <StatisticalDetail />

          {/* NATION */}
          <TitleBar>광고 정보</TitleBar>
          <CaptionText>광고의 기본정보입니다.</CaptionText>
          <MaterialCard>
            {product.nation ? (
              <Nation nation={product.nation} user={user} />
            ) : (
              <NoData />
            )}
          </MaterialCard>

          {/* IMAGES */}
          <TitleBar>온도별 광고 대표이미지</TitleBar>
          <CaptionText>
            춥고, 더울때 보여줄 광고의 대표 이미지입니다.
          </CaptionText>
          <MaterialCard>
            {product.images ? (
              <Images images={product.images} user={user} />
            ) : (
              <NoData />
            )}
          </MaterialCard>

          {/* ROUTES/CONTENTS */}
          <TitleBar>광고의 일자별 경로</TitleBar>
          <CaptionText>광고의 N일차 M번째 경로입니다.</CaptionText>
          <MaterialCard>
            {product.contents ? (
              <Contents contents={product.contents} user={user} />
            ) : (
              <NoData />
            )}
          </MaterialCard>

          {/* MONTH */}
          <TitleBar>광고의 온/습도 테이블</TitleBar>
          <CaptionText>광고의 기본 참고 온/습도 테이블입니다.</CaptionText>
          <MaterialCard>
            {product.month ? (
              <Month month={product.month} user={user} />
            ) : (
              <>
                {user.username === 'admin' ? (
                  <NoData>
                    <MonthForm nationId={id} />
                  </NoData>
                ) : (
                  <NoData>관리자에게 문의해주세요.</NoData>
                )}
              </>
            )}
          </MaterialCard>

          {/* DELETE */}
          {user && user.username === 'admin' && (
            <DeleteAlertDialog>
              {/* children으로 삭제 버튼 넣어줌 */}
              <component.Button onClick={onRemoveAd} color="secondary">
                전체삭제
              </component.Button>
            </DeleteAlertDialog>
          )}
        </DetailWrapper>
      ) : (
        <LoadingBackdrop loading={loading} />
      )}
    </DetailContainer>
  );
};

export default ProductDetail;
