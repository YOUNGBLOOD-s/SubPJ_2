import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Example from './Chart';

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
    <div>
      <Example />
    </div>
  );
};

export default StatisticalDetail;
