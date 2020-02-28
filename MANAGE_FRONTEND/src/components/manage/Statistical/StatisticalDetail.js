import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import styled, { css } from 'styled-components';
import { getStatistical } from '../../../modules/statistical';
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './BarChart';
import palette from '../../../lib/styles/palette';
import Loading from '../../common/Loading';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const DayTypeNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    li {
      list-style: none;
      margin: 0 0.5rem;
    }
  }
`;

const DayTypeBtn = styled.button`
  background-color: ${palette.theme[300]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: ${palette.theme[400]};
    transition-duration: 0.5s;
  }
  ${props =>
    props.active ? css({ backgroundColor: palette.theme[400] }) : null}
`;

const ChartWrapper = styled.div`
  min-height: 400px;
  ${props =>
    props.isLoading &&
    css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })}
`;

const StatisticalDetail = ({ nationIdx }) => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const [dayType, setDayType] = useState('usr');
  const { data, loading } = useSelector(({ statistical, loading }) => ({
    data: statistical.statistical,
    loading: loading['statistical/GET_STATISTICAL'],
  }));

  useEffect(() => {
    dispatch(getStatistical({ token, nationIdx, dayType }));
  }, [token, nationIdx, dayType, dispatch]);

  return (
    <StatisticalDetailWrapper>
      <DayTypeNav>
        <ul>
          <li>
            <DayTypeBtn
              active={dayType === 'usr'}
              onClick={() => setDayType('usr')}
            >
              총합
            </DayTypeBtn>
          </li>
          <li>
            <DayTypeBtn
              active={dayType === '3hour'}
              onClick={() => setDayType('3hour')}
            >
              오늘
            </DayTypeBtn>
          </li>
          <li>
            <DayTypeBtn
              active={dayType === '15day'}
              onClick={() => setDayType('15day')}
            >
              15일
            </DayTypeBtn>
          </li>
          <li>
            <DayTypeBtn
              active={dayType === '1month'}
              onClick={() => setDayType('1month')}
            >
              1달
            </DayTypeBtn>
          </li>
        </ul>
      </DayTypeNav>
      <ChartWrapper isLoading={loading}>
        {!loading && data ? (
          <>
            {dayType === 'usr' && data[nationIdx] && (
              <PieChart origianlData={data[nationIdx]} />
            )}
            {dayType === '3hour' && data.list && (
              <BarChart originalData={data.list} type={dayType} />
            )}
            {dayType === '15day' && data.list && (
              <BarChart originalData={data.list} type={dayType} />
            )}
            {dayType === '1month' && data.list && (
              <BarChart originalData={data.list} type={dayType} />
            )}
          </>
        ) : (
          <Loading>데이터 로딩중</Loading>
        )}
      </ChartWrapper>
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;

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
