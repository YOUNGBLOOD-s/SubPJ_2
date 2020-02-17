import React from 'react';
import component from '../../../../lib/material/component';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeForm } from '../../../../modules/auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = ({ history }) => {
  const dispatch = useDispatch();

  const { nationId, user, member } = useSelector(({ form, user }) => ({
    nationId: form.nationId,
    user: user.user,
    member: user.member,
  }));

  const onCancel = () => {
    // dispatch() // TODO: 생성했던 Nation 날리기
    dispatch(initializeStep());
    dispatch(initializeForm());
    history.push('/');
  };
  return (
    <Wrapper>
      <component.Button
        variant="contained"
        color="secondary"
        onClick={onCancel}
      >
        취소
      </component.Button>
    </Wrapper>
  );
};

export default withRouter(CancelButton);
