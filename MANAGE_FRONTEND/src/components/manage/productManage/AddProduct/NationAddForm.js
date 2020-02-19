import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep } from '../../../../modules/stepper';
import axios from 'axios';
import { selectNation } from '../../../../modules/form';
import continentsArray from '../../../../lib/data/continentsArray';
import StyledTextField from '../../../common/StyledTextField';
import DatePicker from '../../../common/DatePicker';
import reformDate from '../../../../lib/utill/reformDate';
import isAlpha from '../../../../lib/utill/isAlpha';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NationAddForm = ({ classes, steps, step }) => {
  const [product, setProduct] = useState({
    continents: '1',
    en_name: '',
    ko_name: '',
    speech: '',
    price: 100000,
    s_date: reformDate(new Date()),
    f_date: reformDate(new Date()),
  });

  const [errors, setErrors] = useState({
    en_name: false,
    ko_name: false,
    speech: false,
    price: false,
  });

  const [errorText, setErrorText] = useState({
    en_name: '',
    ko_name: '',
    speech: '',
    price: '',
  });

  const dispatch = useDispatch();

  const formValidation = forms => {
    let isError = false;

    let error_set = {
      en_name: false,
      ko_name: false,
      speech: false,
      price: false,
    };

    let error_msg = {
      en_name: '',
      ko_name: '',
      speech: '',
      price: '',
    };

    if (forms.en_name === '') {
      error_set.en_name = true;
      error_msg.en_name += '영문 국가명을 추가해주세요';
      isError = true;
    }

    if (forms.en_name.length > 50) {
      error_set.en_name = true;
      error_msg.en_name += '영문 국가명이 너무 깁니다.';
      isError = true;
    }

    let isEnglish = true;
    for (let i = 0; i < forms.en_name.length; i++) {
      if (!isAlpha(forms.en_name[i])) {
        isEnglish = false;
      }
    }
    if (!isEnglish) {
      error_set.en_name = true;
      error_msg.en_name += '영문만 입력가능합니다.';
      isError = true;
    }

    if (forms.ko_name === '') {
      error_set.ko_name = true;
      error_msg.ko_name += '한글 국가이름을 추가해주세요';
      isError = true;
    }

    if (forms.ko_name.length > 50) {
      error_set.ko_name = true;
      error_msg.ko_name += '한글 국가이름이 너무 깁니다.';
      isError = true;
    }

    if (forms.speech === '') {
      error_set.speech = true;
      error_msg.speech = '스피치 문장을 써주세요.';
      isError = true;
    }

    if (0 > parseInt(forms.price) || parseInt(forms.price) > 100000000) {
      error_set.price = true;
      error_msg.price = '설정 불가한 가격 범위입니다.';
      isError = true;
    }

    if (isNaN(parseInt(forms.price))) {
      error_set.price = true;
      error_msg.price = '숫자가 아닙니다.';
      isError = true;
    }
    setErrors(error_set);
    setErrorText(error_msg);
    if (isError) {
      return false;
    }
    return true;
  };

  const handleNextAndAdd = () => {
    if (formValidation(product)) {
      const token = sessionStorage.getItem('access_token');
      axios
        .post(
          'https://i02c110.p.ssafy.io:8887/api/man/nation/insert',
          product,
          {
            headers: { Authorization: token },
          },
        )
        .then(res => {
          // TODO: 이 인덱스를 리덕스로 글로벌 보관해서 사용해야함
          const { nationidx } = res.data;
          dispatch(
            selectNation({ nationId: nationidx, en_name: product.en_name }),
          );
          dispatch(nextStep());
        })
        .catch(err => {
          const { status } = err.response;
          if (status === 409) {
            setErrors({
              ...errors,
              en_name: true,
              ko_name: true,
            });
            setErrorText({
              ...errorText,
              ko_name: '중복된 한글 국가명입니다.',
              en_name: '중복된 영문 국가명입니다.',
            });
          }
        });
    }
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSDateChange = date => {
    setProduct({
      ...product,
      s_date: reformDate(date),
    });
  };

  const handleFDateChange = date => {
    setProduct({
      ...product,
      f_date: reformDate(date),
    });
  };

  return (
    <StyledForm>
      <component.Grid container spacing={1}>
        <component.Grid item xs={12} sm={6}>
          <DatePicker
            label="여행 출발 일자"
            onChange={handleSDateChange}
            value={product.s_date}
          />
        </component.Grid>
        <component.Grid item xs={12} sm={6}>
          <DatePicker
            label="여행 도착 일자"
            onChange={handleFDateChange}
            value={product.f_date}
          />
        </component.Grid>
        <component.Grid item xs={12}>
          <StyledTextField
            variant="outlined"
            select
            fullWidth
            label="대륙"
            type="text"
            name="continents"
            value={product.continents}
            onChange={handleChange}
            error={errors.continents}
          >
            {continentsArray.map(continent => (
              <MenuItem key={continent.value} value={continent.value}>
                {continent.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </component.Grid>
        <component.Grid item xs={6}>
          <StyledTextField
            variant="outlined"
            label="한글 국가이름"
            type="text"
            name="ko_name"
            fullWidth
            value={product.ko_name}
            onChange={handleChange}
            error={errors.ko_name}
            helperText={errorText.ko_name}
          />
        </component.Grid>
        <component.Grid item xs={6}>
          <StyledTextField
            variant="outlined"
            label="영문(EN) 국가이름"
            type="text"
            name="en_name"
            fullWidth
            value={product.en_name}
            onChange={handleChange}
            error={errors.en_name}
            helperText={errorText.en_name}
          />
        </component.Grid>

        <component.Grid item xs={12}>
          <StyledTextField
            variant="outlined"
            label="💵 패키지 가격(원)"
            type="text"
            name="price"
            fullWidth
            value={product.price}
            onChange={handleChange}
            error={errors.price}
            helperText={errorText.price}
          />
        </component.Grid>
        <component.Grid item xs={12}>
          <StyledTextField
            variant="outlined"
            label="🎤 스피치 문장"
            type="text"
            name="speech"
            multiline
            fullWidth
            value={product.speech}
            onChange={handleChange}
            error={errors.speech}
            helperText={errorText.speech}
          />
        </component.Grid>
        <component.Grid item xs={12}>
          <component.Button
            disabled={step === 0}
            onClick={handleBack}
            className={classes.button}
          >
            이전단계로
          </component.Button>
          <component.Button
            variant="contained"
            color="primary"
            onClick={handleNextAndAdd}
            className={classes.button}
          >
            {step === steps.length - 1 ? '완료' : '다음'}
          </component.Button>
        </component.Grid>
      </component.Grid>
    </StyledForm>
  );
};

export default NationAddForm;
