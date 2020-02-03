import 'date-fns';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import koLocale from 'date-fns/locale/ko';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TitleBar from './common/TitleBar';
import component from '../../lib/material/component';
import MaterialCard from '../common/MaterialCard';
import { withStyles } from '@material-ui/core/styles';
import CaptionText from './common/CaptionText';
import palette from '../../lib/styles/palette';

const ReservationFormBlock = styled.div`
  padding: 1rem 0.5rem;
  /* 예약날짜 컴포넌트 스타일 */
  .MuiFormControl-marginNormal {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDatePicker = withStyles({
  root: {
    '& label.Mui-focused': {
      color: palette.red[200],
    },
  },
})(KeyboardDatePicker);

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: palette.red[200],
    },
    '& .MuiOutlinedInput-root': {
      // 기본 필드 보더 색상
      '& fieldset': {
        borderColor: 'black',
      },
      // 호버 했을때 색상
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      //  포커스 시 보더 색상
      '&.Mui-focused fieldset': {
        borderColor: palette.red[200],
      },
    },
  },
})(component.TextField);

const ReservationConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReservationForm = ({ nationId }) => {
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

    // TODO: 검증 좀더 빡세게 ?
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

    const now = new Date(form.date);
    const reform_date = `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()}`;

    // 상담 예약 요청
    axios
      .post('/api/counsel', {
        idx: nationId, // 현재 보고있는 상품 아이디
        name: form.name,
        email: form.email,
        tel: form.tel,
        age: form.age,
        date: reform_date,
        text: form.text,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // 모든 검증이 완료되고 요청을 보내고 완료되면 예약 상태를 true로 변경
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
      <TitleBar>📅 상담 예약</TitleBar>
      <CaptionText>상품에 대해 궁금한게 있다면 상담을 예약하세요.</CaptionText>
      <MaterialCard>
        {!isReserved ? (
          <form onSubmit={onSubmit}>
            <FieldWrapper>
              {/* FIXME: 포커스 시 색상 및 캘린더 색상 변경 */}
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
                <StyledDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="예약 날짜 선택"
                  format="yyyy년 MM월 dd일"
                  value={form.date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <component.Grid container>
                <component.Grid item xs={8}>
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
                </component.Grid>
                <component.Grid item xs={4}>
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
                </component.Grid>
              </component.Grid>
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
                multiline
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
      </MaterialCard>
    </ReservationFormBlock>
  );
};

export default ReservationForm;
