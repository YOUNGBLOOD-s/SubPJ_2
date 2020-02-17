import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Example from './Chart';
import styled from 'styled-components';

const StatisticalDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StatisticalDetail = ({ history }) => {
  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));

  useEffect(() => {
    if (member && member.grade === 0) {
      history.push('/manage/grade');
    }
  }, [member, history]);

  return (
    <StatisticalDetailWrapper>
      <Example />
    </StatisticalDetailWrapper>
  );
};

export default StatisticalDetail;
