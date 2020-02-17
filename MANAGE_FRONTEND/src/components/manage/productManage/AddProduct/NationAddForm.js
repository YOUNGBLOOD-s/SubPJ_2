import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../../../modules/stepper';
import axios from 'axios';
import { selectNation } from '../../../../modules/form';
import continentsArray from '../../../../lib/data/continentsArray';
import StyledTextField from '../../../common/StyledTextField';

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
    price: '',
    s_date: '',
    f_date: '',
  });

  const dispatch = useDispatch();

  const handleNextAndAdd = () => {
    // TODO: 인풋 필드 검증필요
    const token = sessionStorage.getItem('access_token');
    axios
      .post('https://i02c110.p.ssafy.io:8887/api/man/nation/insert', product, {
        headers: { Authorization: token },
      })
      .then(res => {
        // TODO: 이 인덱스를 리덕스로 글로벌 보관해서 사용해야함
        const { nationidx } = res.data;
        dispatch(selectNation(nationidx));
        dispatch(nextStep());
      })
      .catch(err => console.log(err));
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

  return (
    <StyledForm>
      <component.Grid container spacing={1}>
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
          />
        </component.Grid>
        {/* TODO: 날짜 선택은 이전에 사용했던 캘린더로 변경 */}
        <component.Grid item xs={6}>
          <StyledTextField
            variant="outlined"
            label="🛫 여행 출발 일자(yyyy-mm-dd)"
            type="text"
            name="s_date"
            fullWidth
            value={product.s_date}
            onChange={handleChange}
          />
        </component.Grid>
        <component.Grid item xs={6}>
          <StyledTextField
            variant="outlined"
            label="🛬 여행 도착 일자(yyyy-mm-dd)"
            type="text"
            name="f_date"
            fullWidth
            value={product.f_date}
            onChange={handleChange}
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
          />
        </component.Grid>
        <component.Grid item xs={12}>
          {/* TODO: 만약 요청에 실패한다면 에러 메세지를 띄울것 */}
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
