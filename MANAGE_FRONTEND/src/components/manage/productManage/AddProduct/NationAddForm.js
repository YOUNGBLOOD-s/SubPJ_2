import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../../../modules/stepper';
import axios from 'axios';

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    '& label.Mui-focused': {
      color: palette.red[300],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.red[300],
      },
    },
  },
})(component.TextField);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NationAddForm = ({ classes, steps }) => {
  const [product, setProduct] = useState({
    continents: '1',
    en_name: '',
    ko_name: '',
    speech: '',
    price: '',
    s_date: '',
    f_date: '',
  });

  const { step } = useSelector(({ stepper }) => ({
    step: stepper.step,
  }));

  const dispatch = useDispatch();

  const handleNextAndAdd = () => {
    const token = sessionStorage.getItem('access_token');
    axios
      .post('/api/man/nation/insert', product, {
        headers: { Authorization: token },
      })
      .then(res => {
        console.log(res);
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
      <StyledTextField
        variant="outlined"
        select
        label="대륙"
        type="text"
        name="continents"
        value={product.continents}
        onChange={handleChange}
      >
        {continents_arr.map(continent => (
          <MenuItem key={continent.value} value={continent.value}>
            {continent.label}
          </MenuItem>
        ))}
      </StyledTextField>
      <StyledTextField
        variant="outlined"
        label="국가 영문 이름"
        type="text"
        name="en_name"
        value={product.en_name}
        onChange={handleChange}
      />
      <StyledTextField
        variant="outlined"
        label="국가 한글 이름"
        type="text"
        name="ko_name"
        value={product.ko_name}
        onChange={handleChange}
      />
      <StyledTextField
        variant="outlined"
        label="여행 출발 일자(yyyy-mm-dd)"
        type="text"
        name="s_date"
        value={product.s_date}
        onChange={handleChange}
      />
      <StyledTextField
        variant="outlined"
        label="여행 도착 일자(yyyy-mm-dd)"
        type="text"
        name="f_date"
        value={product.f_date}
        onChange={handleChange}
      />
      <StyledTextField
        variant="outlined"
        label="가격"
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <StyledTextField
        variant="outlined"
        label="스피치"
        type="text"
        name="speech"
        value={product.speech}
        onChange={handleChange}
      />
      <div className={classes.actionsContainer}>
        <div>
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
        </div>
      </div>
    </StyledForm>
  );
};

export default NationAddForm;

const continents_arr = [
  {
    value: '1',
    label: '유럽',
  },
  {
    value: '2',
    label: '북태평양',
  },
  {
    value: '3',
    label: '아프리카',
  },
  {
    value: '4',
    label: '아시아',
  },
  {
    value: '5',
    label: '북미',
  },
];
