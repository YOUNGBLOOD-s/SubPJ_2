import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import axios from 'axios';

const StatisticalBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledChip = styled.div`
  background-color: ${palette.teal[200]};
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  margin-right: 2rem;
  cursor: pointer;
  color: white;
  :last-child {
    margin-right: 0;
  }
  :hover {
    background-color: ${palette.teal[500]};
    transition-duration: 0.5s;
  }
`;

let prev = 1;

const StatisticalBar = ({ setData }) => {
  const handleClick = type => {
    if (type === prev) return;
    if (type === 1) {
      axios
        .get('https://i02c110.p.ssafy.io:8887/api/statistics/3hour')
        .then(res => {
          setData(res.data.list);
        })
        .catch(err => console.log(err));
    } else if (type === 2) {
      axios
        .get('https://i02c110.p.ssafy.io:8887/api/statistics/15day')
        .then(res => {
          setData(res.data.list);
        })
        .catch(err => console.log(err));
    } else if (type === 3) {
      axios
        .get('https://i02c110.p.ssafy.io:8887/api/statistics/1month')
        .then(res => {
          setData(res.data.list);
        })
        .catch(err => console.log(err));
    }
    prev = type;
  };
  return (
    <StatisticalBarWrapper>
      <StyledChip onClick={() => handleClick(1)}>1일</StyledChip>
      <StyledChip onClick={() => handleClick(2)}>15일</StyledChip>
      <StyledChip onClick={() => handleClick(3)}>1년</StyledChip>
    </StatisticalBarWrapper>
  );
};

export default StatisticalBar;
