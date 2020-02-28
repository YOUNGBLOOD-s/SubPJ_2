import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Badge = styled.div`
  /* padding: 0.5rem 1rem; */
  font-size: 1.5rem;
  color: ${props =>
    props.completed ? palette.green[600] : palette.amber[600]};
  text-align: center;
  /* border-radius: 8px; */
  font-weight: bold;
  /* color: white; */
`;

const CompletedBadge = ({ completed }) => {
  return (
    <>
      {completed ? (
        <Badge completed={completed}>광고중</Badge>
      ) : (
        <Badge completed={completed}>승인 대기중</Badge>
      )}
    </>
  );
};

export default CompletedBadge;
