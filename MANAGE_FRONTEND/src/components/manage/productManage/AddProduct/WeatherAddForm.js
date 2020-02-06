import React from 'react';
import component from '../../../../lib/material/component';
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

const WeatherAddForm = () => {
  const [weathers, setWeathers] = useState({
    hum1: '',
    hum2: '',
    hum3: '',
    hum4: '',
    hum5: '',
    hum6: '',
    hum7: '',
    hum8: '',
    hum9: '',
    hum10: '',
    hum11: '',
    hum12: '',
    tem1: '',
    tem2: '',
    tem3: '',
    tem4: '',
    tem5: '',
    tem6: '',
    tem7: '',
    tem8: '',
    tem9: '',
    tem10: '',
    tem11: '',
    tem12: '',
    nation: '1', // 연결된 nation id
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setWeathers({ ...weathers, [name]: value });
  };

  const monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <h4>해당 여행 상품의 온도</h4>
      <StyledForm>
        <div>
          {monthes.map(month => (
            <StyledTextField
              variant="outlined"
              label={`${month}월 온도`}
              type="Number"
              name={`tem${month}`}
              value={weathers[`tem${month}`]}
              onChange={handleChange}
            />
          ))}
        </div>
        <h4>해당 여행 상품의 월별 습도</h4>
        <div>
          {monthes.map(month => (
            <StyledTextField
              variant="outlined"
              label={`${month}월 습도`}
              type="Number"
              name={`hum${month}`}
              value={weathers[`hum${month}`]}
              onChange={handleChange}
            />
          ))}
        </div>
        <component.Button variant="contained" type="submit">
          온도 생성 및 연결
        </component.Button>
      </StyledForm>
    </div>
  );
};

export default WeatherAddForm;
