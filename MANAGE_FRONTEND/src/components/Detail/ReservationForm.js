import 'date-fns';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitleBar from './common/TitleBar';
import component from '../../lib/material/component';
import MaterialCard from '../common/MaterialCard';
import CaptionText from './common/CaptionText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import reformDate from '../../lib/utill/reformDate';
import DatePicker from '../common/DatePicker';
import StyledTextField from '../common/StyledTextField';

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

const ReservationConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CompleteText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin: 1rem 0;
`;

// 이하 컴포넌트

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

    // TODO: 검증 및 에러 메세지 추가
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

    const reform_date = reformDate(new Date(form.date));
    // 상담 예약 요청
    axios
      .post('/api/counsel', {
        nation: nationId, // 현재 보고있는 상품 아이디
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
      <TitleBar>
        <span role="img" aria-label="emoji">
          📅
        </span>{' '}
        상담 예약
      </TitleBar>
      <CaptionText>상품에 대해 궁금한게 있다면 상담을 예약하세요.</CaptionText>
      <MaterialCard>
        {!isReserved ? (
          <form onSubmit={onSubmit}>
            <FieldWrapper>
              <component.Grid container spacing={1}>
                {/* FIXME: 포커스 시 색상 및 캘린더 색상 변경 */}
                <component.Grid item xs={12}>
                  <DatePicker
                    onChange={handleDateChange}
                    value={form.date}
                    label={'상담 날짜 설정'}
                  />
                </component.Grid>
                <component.Grid item xs={8}>
                  <StyledTextField
                    className="name"
                    id="name"
                    type="text"
                    label="성명"
                    variant="outlined"
                    name="name"
                    fullWidth
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
                    fullWidth
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
            <ButtonWrapper>
              <component.Button
                color="secondary"
                variant="contained"
                type="submit"
              >
                상담 예약
              </component.Button>
            </ButtonWrapper>
          </form>
        ) : (
          <ReservationConfirmBox>
            <CheckCircleIcon style={{ color: 'green' }} />
            <CompleteText>상담 예약을 완료하셨습니다!</CompleteText>
            <component.Button
              onClick={onReset}
              color="secondary"
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
