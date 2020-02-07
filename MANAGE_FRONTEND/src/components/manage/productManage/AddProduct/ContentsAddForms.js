import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styled from 'styled-components';
import MaterialCard from '../../../common/MaterialCard';

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

const ContentsAddForm = () => {
  const initialState = {
    day: '', // 컨텐츠의 일자
    detail: '', // 컨텐츠 설명
    image: '', // 컨텐츠 이미지
    seq: '', // 순서
    title: '', // 여행지명
    tofrom: '', // ~~에서 ~~ 까지
    transport: '차량', // 이동수단
    nation: '1', // 컨텐츠가 포함되는 국가 id
  };

  const [disabled, setDisabled] = useState(false);
  const [content, setContent] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <MaterialCard>
      <StyledForm onSubmit={onSubmit}>
        <component.Grid container>
          <component.Grid item xs={8}>
            <StyledTextField
              variant="outlined"
              label="컨텐츠 이름"
              type="text"
              name="title"
              disabled={disabled}
              value={content.title}
              onChange={handleChange}
            />
          </component.Grid>
          <component.Grid item xs={4}>
            <StyledTextField
              variant="outlined"
              label="이동수단"
              select
              name="transport"
              disabled={disabled}
              value={content.transport}
              onChange={handleChange}
            >
              {transport_arr.map(transport => (
                <MenuItem key={transport.value} value={transport.value}>
                  {transport.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </component.Grid>
          <component.Grid item>
            <StyledTextField
              variant="outlined"
              label="컨텐츠 설명"
              type="text"
              name="detail"
              disabled={disabled}
              value={content.detail}
              onChange={handleChange}
            />
          </component.Grid>
          <component.Grid item xs={3}>
            <StyledTextField
              variant="outlined"
              label="여행 일차"
              type="Number"
              name="day"
              disabled={disabled}
              value={content.day}
              onChange={handleChange}
            />
          </component.Grid>
          <component.Grid item xs={3}>
            <StyledTextField
              variant="outlined"
              label="해당일차의 여행순번"
              type="Number"
              name="seq"
              disabled={disabled}
              value={content.seq}
              onChange={handleChange}
            />
          </component.Grid>

          <StyledTextField
            variant="outlined"
            label="이미지"
            type="text"
            name="image"
            disabled={disabled}
            value={content.image}
            onChange={handleChange}
          />
          <StyledTextField
            variant="outlined"
            label="~에서 ~까지"
            type="text"
            name="tofrom"
            disabled={disabled}
            value={content.tofrom}
            onChange={handleChange}
          />
          <button onClick={() => setDisabled(true)}>다썼다</button>
        </component.Grid>
      </StyledForm>
    </MaterialCard>
  );
};

const ContentAddForms = () => {
  const [contentForms, setContentForms] = useState([<ContentsAddForm />]);
  const addForm = () => {
    setContentForms([...contentForms, <ContentsAddForm />]);
  };

  return (
    <div>
      <div>
        {contentForms.map((contentForm, idx) => (
          <div key={idx}>{contentForm}</div>
        ))}
      </div>
      <button onClick={addForm}>폼추가하기</button>
    </div>
  );
};

export default ContentAddForms;

const transport_arr = [
  {
    value: '비행기',
    label: '비행기',
  },
  {
    value: '경비행기',
    label: '경비행기',
  },
  {
    value: '버스',
    label: '버스',
  },
  {
    value: '기차',
    label: '기차',
  },
  {
    value: '차량',
    label: '차량',
  },
  {
    value: '유람선',
    label: '유람선',
  },
  {
    value: '배',
    label: '배',
  },
];
