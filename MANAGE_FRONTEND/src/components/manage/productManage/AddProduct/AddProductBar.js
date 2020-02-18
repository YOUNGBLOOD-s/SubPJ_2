import React from 'react';
import component from '../../../../lib/material/component';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializeStep } from '../../../../modules/stepper';
import { initializeForm } from '../../../../modules/auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const AddProductBar = ({ history }) => {
  const dispatch = useDispatch();

  // const { nationId, user, member } = useSelector(({ form, user }) => ({
  //   nationId: form.nationId,
  //   user: user.user,
  //   member: user.member,
  // }));

  const onCancel = () => {
    // dispatch() // TODO: 생성했던 Nation 날리기
    dispatch(initializeStep());
    dispatch(initializeForm());
    history.goBack();
  };
  return (
    <Wrapper>
      <component.Button variant="outlined" onClick={onCancel}>
        취소 및 뒤로가기
      </component.Button>
    </Wrapper>
  );
};

export default withRouter(AddProductBar);
