import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Example from './Chart';
import styled from 'styled-components';
import StatisticalBar from './StatisticalBar';
import axios from 'axios';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StatisticalDetail = ({ history }) => {
  const [data, setData] = useState(null);

  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));

  // grade 0일 때 등급 구매 페이지로 이동
  useEffect(() => {
    if (member && member.grade === 0) {
      history.push('/manage/grade');
    }
  }, [member, history]);

  useEffect(() => {
    axios
      .get('https://i02c110.p.ssafy.io:8887/api/statistics/3hour')
      .then(res => {
        console.log(res.data.list);
        setData(res.data.list);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <StatisticalDetailWrapper>
      <StatisticalBar setData={setData} />
      <Example data={data} />
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;
