import 'date-fns';
import koLocale from 'date-fns/locale/ko';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBar from './TitleBar';
import component from '../../lib/component';

const ReservationFormBlock = styled.div`
  padding: 1rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .boxes {
    display: flex;
    .name {
      flex-grow: 1;
    }
    .tel {
      flex-grow: 1;
      margin: 0 1rem;
    }
  }
`;

const StyledTextField = styled(component.TextField)`
  margin-bottom: 1rem;
`;

const ReservationConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReservationForm = () => {
  const initialState = {
    form: {
      name: '',
      email: '',
      tel: '', //  번호
      age: 20, // 나이
      date: new Date(), // 상담을 원하는 날짜 => string?
      text: '', // 남기는 말
    },
    error: {
      name: false,
      email: false,
      tel: false,
      age: false,
      date: false,
      text: false,
    },
  };

  const [form, setForm] = useState(initialState.form);
  const [isReserved, setIsReserved] = useState(false);
  const [error, setError] = useState(initialState.error);

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = e => {
    setError(initialState.error);
    e.preventDefault();

    // 나이 제한
    if (parseInt(form.age) < 1 || parseInt(form.age) > 200) {
      setError({ ...error, age: true });
      return;
    }
    // 이메일 검증
    if (!form.email.includes('@')) {
      setError({ ...error, email: true });
      return;
    }

    // TODO: form axios 요청

    // 모든 검증이 완료되고 요청을 보내고 완료되면 예약 상태를 true로 변경
    console.log(form);
    setIsReserved(true);
  };

  const onReset = () => {
    setIsReserved(false);
    setForm(initialState.form);
  };

  const handleDateChange = date => {
    setForm({
      ...form,
      date,
    });
  };

  return (
    <ReservationFormBlock>
      <TitleBar text="상담 예약" />

      {!isReserved ? (
        <form onSubmit={onSubmit}>
          <FieldWrapper>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="예약 날짜 선택"
                  format="MM/dd/yyyy"
                  value={form.date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="boxes">
              <StyledTextField
                className="name"
                id="name"
                type="text"
                label="성명"
                variant="outlined"
                name="name"
                value={form.name}
                onChange={onChange}
                error={error.name}
              />
              <StyledTextField
                className="tel"
                id="phone"
                label="연락처"
                variant="outlined"
                name="tel"
                value={form.tel}
                onChange={onChange}
                error={error.tel}
              />
              {/* TODO: 기본값은 ? */}
              <StyledTextField
                id="age"
                label="나이"
                variant="outlined"
                type="number"
                name="age"
                value={form.age}
                onChange={onChange}
                error={error.age}
              />
            </div>
            <StyledTextField
              id="email"
              type="email"
              label="이메일"
              variant="outlined"
              name="email"
              value={form.email}
              onChange={onChange}
              error={error.email}
            />

            {/* TODO: 텍스트 필드로 변경 (크게) */}
            <StyledTextField
              id="text"
              type="textarea"
              label="문의 내용"
              variant="outlined"
              name="text"
              value={form.text}
              onChange={onChange}
              error={error.text}
            />
          </FieldWrapper>
          <component.Button color="primary" variant="contained" type="submit">
            상담 예약
          </component.Button>
        </form>
      ) : (
        <ReservationConfirmBox>
          <component.Typography variant="h6">
            상담 예약을 완료하셨습니다!
          </component.Typography>
          <component.Button
            onClick={onReset}
            color="primary"
            variant="contained"
          >
            다시 상담하기
          </component.Button>
        </ReservationConfirmBox>
      )}
    </ReservationFormBlock>
  );
};

export default ReservationForm;
