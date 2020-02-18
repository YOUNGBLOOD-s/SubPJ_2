import React from 'react';
import GradeCard from './GradeCard';
import styled from 'styled-components';

const GradeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  flex-wrap: wrap;

  .card-wrapper {
    margin-bottom: 1rem;
    margin-right: 1rem;
    :last-child {
      margin-right: 0;
    }
    @media (max-width: 600px) {
      margin-right: 0;
    }
  }
`;

const Grade = () => {
  return (
    <GradeWrapper>
      {gradeInfo.map((info, idx) => (
        <div className="card-wrapper" key={idx}>
          <GradeCard info={info} />
        </div>
      ))}
    </GradeWrapper>
  );
};

export default Grade;

const gradeInfo = [
  {
    title: '실버 셀러',
    grade: '2',
    price: '300,000',
    image: '/img/tier1.svg',
    option: ['시간당 5회 광고 노출', '2개 광고 등록 가능'],
  },
  {
    title: '골드 셀러',
    grade: '3',
    price: '600,000',
    image: '/img/tier2.svg',
    option: ['시간당 10회 광고 노출', '5개 광고 등록 가능'],
  },
  {
    title: '플래티넘 셀러',
    grade: '4',
    price: '1,000,000',
    image: '/img/tier3.svg',
    option: ['시간당 15회 광고 노출', '10개 광고 등록 가능'],
  },
];
