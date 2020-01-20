import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import TitleBar from './TitleBar';

const ReservationFormBlock = styled.div`
  padding: 1rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

const ReservationForm = () => {
  return (
    <ReservationFormBlock>
      <TitleBar text="상담 예약" />
      <form>
        <FieldWrapper>
          <StyledTextField
            id="name"
            type="text"
            label="성명"
            variant="outlined"
          />
          <StyledTextField
            id="email"
            type="email"
            label="이메일"
            variant="outlined"
          />
          <StyledTextField id="phone" label="연락처" variant="outlined" />
        </FieldWrapper>
        <Button color="primary" variant="contained" type="submit">
          상담 예약
        </Button>
      </form>
    </ReservationFormBlock>
  );
};

export default ReservationForm;
