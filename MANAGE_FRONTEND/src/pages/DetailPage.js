import React, { useEffect } from 'react';
import styled from 'styled-components';
import BasicInformation from '../components/Detail/BasicInformation';
import TravelRoute from '../components/Detail/TravelRoute';
import CautionText from '../components/Detail/CautionText';
import ReservationForm from '../components/Detail/ReservationForm';
import KakaoChat from '../components/Detail/KakaoChat';
import LoadingBackdrop from '../components/common/LoadingBackdrop';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { getQrDetail, increaseQrView } from '../modules/qr';
import Price from '../components/Detail/Price';
import GoToMainButton from '../components/Detail/GoToMainButton';
import { Helmet } from 'react-helmet-async';

const DetailPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const DetailPage = ({ match, history, location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { id } = match.params;
  const { nation, loading, error } = useSelector(({ qr, loading }) => ({
    nation: qr.nation,
    loading: loading['qr/GET_QR_DETAIL'],
    error: qr.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQrDetail({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    if (query && query.qr === 'true') {
      dispatch(increaseQrView({ id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      history.push('/');
    }
  }, [history, error]);

  return (
    <>
      {!loading && nation ? (
        <div>
          <Helmet>
            <title>{nation.name} - NEARBY AD</title>
            <meta property="og:title" content={nation.name} />
            <meta property="og:image" content={nation.thumbnail} />
            <meta property="og:site_name" content="NEARBY AD" />
            <meta property="og:description" content={nation.speech} />
          </Helmet>
          <BasicInformation country={nation} />
          <DetailPageWrapper>
            <Price price={nation.price} />
            <TravelRoute id="travel" routes={nation.routes} />
            <CautionText category={nation.category} />
            <ReservationForm nationId={nation.id} />
            <GoToMainButton />
            <KakaoChat />
          </DetailPageWrapper>
        </div>
      ) : (
        <LoadingBackdrop loading={loading} />
      )}
    </>
  );
};

export default DetailPage;
