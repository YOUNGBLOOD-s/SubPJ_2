import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BasicInformation from '../components/Detail/BasicInformation';
import TravelRoute from '../components/Detail/TravelRoute';
import CautionText from '../components/Detail/CautionText';
import ReservationForm from '../components/Detail/ReservationForm';
import KakaoChat from '../components/Detail/KakaoChat';
import SimpleBackdrop from '../components/common/LoadingBackdrop';
import axios from '../../node_modules/axios/index';

const DetailPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const DetailPage = ({ match, history }) => {
  const { id } = match.params;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/detail/${id}`)
      .then(res => {
        const { data } = res;
        setCountry(data); // 나라 설정
      })
      .catch(err => {
        console.log(err);
        const { status } = err.response;
        if (status === 404) {
          history.push('/');
        }
      });
    setLoading(false);
  }, [id, history]);

  return (
    <>
      {!loading && country ? (
        <div>
          <BasicInformation country={country} />
          <DetailPageWrapper>
            <TravelRoute id="travel" routes={country.routes} />
            <CautionText category={country.category} />
            <ReservationForm nationId={country.id} />
            <KakaoChat />
          </DetailPageWrapper>
        </div>
      ) : (
        <SimpleBackdrop loading={loading} />
      )}
    </>
  );
};

export default DetailPage;
