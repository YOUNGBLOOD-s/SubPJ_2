import React, { useEffect, useState } from 'react';
import Example from './Chart';
import styled from 'styled-components';
import StatisticalBar from './StatisticalBar';
import axios from 'axios';
import { getStatistical } from '../../../modules/statistical';
import { useDispatch, useSelector } from 'react-redux';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StatisticalDetail = ({ nationIdx }) => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const [dayType, setDayType] = useState('usr');
  const { data } = useSelector(({ statistical }) => ({
    data: statistical.statistical,
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
  console.log();
  useEffect(() => {
    dispatch(getStatistical({ token, nationIdx, dayType }));
  }, [token, nationIdx, dayType, dispatch]);

  return (
    <StatisticalDetailWrapper>
      <div>
        <div onClick={() => setDayType('3hour')}>(안댐)오늘로부터 3시간</div>
        <div onClick={() => setDayType('15day')}>(안댐)오늘로부터 15일</div>
        <div onClick={() => setDayType('1month')}>
          (안댐)오늘로부터 1년?1달?
        </div>
        <div onClick={() => setDayType('usr')}>유저 qr,click카운트</div>
      </div>
      {data && <Example origianlData={data[nationIdx]} />}
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;
