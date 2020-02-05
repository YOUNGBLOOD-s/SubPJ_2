import React from 'react';
import styled from 'styled-components';
import GradeCard from './GradeCard';

const Grade = () => {
  const gradeInfo = [
    {
      grade: '일반 셀러',
      price: '300,000',
      cnt: '5',
      option: ['시간당 5회 광고 노출', ''],
    },
  ];
  return (
    <div>
      <h1>Grade Purchase</h1>
      <GradeCard
        image={process.env.PUBLIC_URL + '/img/tier1.svg'}
        grade="4"
        price="1,000,000"
        number="15"
      ></GradeCard>
    </div>
  );
};

export default Grade;
