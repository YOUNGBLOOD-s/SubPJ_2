import React, { useEffect, useState } from 'react';
import Example from './Chart';
import styled from 'styled-components';
import StatisticalBar from './StatisticalBar';
import axios from 'axios';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StatisticalDetail = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://i02c110.p.ssafy.io:8887/api/statistics/3hour')
      .then(res => {
        setData(res.data.list);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <StatisticalDetailWrapper>
      <h1>이제 곧 나의 광고 안으로 들어갈 컴포넌트입니다</h1>
      <StatisticalBar setData={setData} />
      <Example data={data} />
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;
