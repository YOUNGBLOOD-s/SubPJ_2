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
    transport: '', // 이동수단
    nation: '1', // 컨텐츠가 포함되는 국가 id
  };

  const [content, setContent] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  return (
    <MaterialCard>
      <StyledForm>
        <StyledTextField
          variant="outlined"
          label="컨텐츠 설명"
          type="text"
          name="detail"
          value={content.detail}
          onChange={handleChange}
        />
        <StyledTextField
          variant="outlined"
          label="컨텐츠 이름"
          type="text"
          name="title"
          value={content.title}
          onChange={handleChange}
        />
        <component.Grid container>
          <component.Grid item xs={3}>
            <StyledTextField
              variant="outlined"
              label="여행 일차"
              type="Number"
              name="day"
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
              value={content.seq}
              onChange={handleChange}
            />
          </component.Grid>
        </component.Grid>

        <StyledTextField
          variant="outlined"
          label="이미지"
          type="text"
          name="image"
          value={content.image}
          onChange={handleChange}
        />
        <StyledTextField
          variant="outlined"
          label="~에서 ~까지"
          type="text"
          name="tofrom"
          value={content.tofrom}
          onChange={handleChange}
        />
        <StyledTextField
          variant="outlined"
          label="이동수단"
          type="text"
          name="transport"
          value={content.transport}
          onChange={handleChange}
        />
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
      <div>{contentForms.map(contentForm => contentForm)}</div>
      <button onClick={addForm}>폼추가하기</button>
    </div>
  );
};

export default ContentAddForms;
