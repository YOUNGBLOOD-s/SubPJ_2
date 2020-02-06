import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styled from 'styled-components';

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: palette.red[300],
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
        borderColor: palette.red[300],
      },
    },
  },
})(component.TextField);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const continents = [
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

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    continent: 'EUR',
    en_name: '',
    ko_name: '',
    speech: '',
    price: '',
    s_date: '',
    f_date: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // TODO: 제출시 API요청

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledTextField
        variant="outlined"
        select
        label="대륙"
        type="text"
        name="continent"
        value={product.continent}
        onChange={handleChange}
      >
        {continents.map(continent => (
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
    </StyledForm>
  );
};

export default ProductForm;
