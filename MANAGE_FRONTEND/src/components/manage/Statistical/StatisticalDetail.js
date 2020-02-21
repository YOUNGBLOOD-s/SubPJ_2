import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import styled from 'styled-components';
import { getStatistical } from '../../../modules/statistical';
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './BarChart';
import LoadingBackdrop from '../../common/LoadingBackdrop';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StatisticalDetail = ({ nationIdx }) => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const [dayType, setDayType] = useState('usr');
  const { data, loading } = useSelector(({ statistical, loading }) => ({
    data: statistical.statistical,
    loading: loading['statistical/GET_STATISTICAL'],
  }));
  /*
  /api/statistics/15day/{nationIdx}
  오늘 날짜부터 15일 전까지의 통계 데이터
  /api/statistics/1month/{nationIdx}
  오늘 날짜부터 1년 전까지의 통계 데이터
  /api/statistics/3hour/{nationIdx}
  오늘 날짜부터 1일 전까지의 데이터를 3시간씩 묶은 통계 데이터
  /api/statistics/usr/{nationIdx}
  statistics api 사용자 토큰 받아서 해당 사용자 click, qr count만 전송
  */
  useEffect(() => {
    dispatch(getStatistical({ token, nationIdx, dayType }));
  }, [token, nationIdx, dayType, dispatch]);

  return (
    <StatisticalDetailWrapper>
      <div>
        <div onClick={() => setDayType('3hour')}>오늘로부터 3시간</div>
        <div onClick={() => setDayType('15day')}>오늘로부터 15일</div>
        <div onClick={() => setDayType('1month')}>오늘로부터 1년?1달?</div>
        <div onClick={() => setDayType('usr')}>유저 qr,click카운트</div>
      </div>
      {data && dayType === 'usr' && data[nationIdx] && (
        <PieChart origianlData={data[nationIdx]} />
      )}
      {data && dayType === '3hour' && data.list && (
        <BarChart originalData={data.list} type={dayType} />
      )}
      {data && dayType === '15day' && data.list && (
        <BarChart originalData={data.list} type={dayType} />
      )}
      {data && dayType === '1month' && data.list && (
        <BarChart originalData={data.list} type={dayType} />
      )}
      <LoadingBackdrop loading={loading} />
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;
