import React from 'react';
import CompletedBadge from '../common/CompletedBadge';
import { useDispatch } from 'react-redux';
import { toggleProductCompleted } from '../../modules/product';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const NationCompleteToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleBtn = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  color: white;
  background-color: ${palette.deepPurple[300]};
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: ${palette.deepPurple[500]};
    transition-duration: 0.5s;
  }
`;

const NationCompleteToggle = ({ completed, idx, user }) => {
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(toggleProductCompleted({ id: idx }));
  };

  return (
    <NationCompleteToggleWrapper>
      <CompletedBadge completed={completed} />
      {user && user.username === 'admin' && (
        <ToggleBtn onClick={onToggle}>
          {completed ? '대기 전환' : '승인 전환'}
        </ToggleBtn>
      )}
    </NationCompleteToggleWrapper>
  );
};

export default NationCompleteToggle;
