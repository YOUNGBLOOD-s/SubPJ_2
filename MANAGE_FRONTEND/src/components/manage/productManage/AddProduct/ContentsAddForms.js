import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styled from 'styled-components';
import MaterialCard from '../../../common/MaterialCard';
import { useDispatch, useSelector } from 'react-redux';
import { addRoute, removeRoute } from '../../../../modules/product';
import ImageUploader from '../../../common/ImageUploader';

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

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsAddForm = ({ nationId }) => {
  const initialState = {
    day: '1', // 컨텐츠의 일자
    seq: '1', // 순서
    detail: '', // 컨텐츠 설명
    image: '', // 컨텐츠 이미지
    title: '', // 여행지명
    tofrom: '', // ~~에서 ~~ 까지
    transport: '차량', // 이동수단
    nation: nationId, // 컨텐츠가 포함되는 국가 id
  };

  const [disabled, setDisabled] = useState(false);
  const [content, setContent] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const setImageUrl = url => {
    setContent({ ...content, image: url });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const onLocking = () => {
    // 잠금
    setDisabled(!disabled);
    // 컨텐츠 리덕스 스토어에 추가
    dispatch(addRoute(content));
  };

  const onUnLocking = () => {
    // 잠금 풀고
    setDisabled(!disabled);
    // 기존경로 리덕스 스토어에서 삭제
    dispatch(removeRoute(content));
  };
  return (
    <MaterialCard>
      {disabled ? (
        <component.Grid container spacing={1}>
          <component.Grid item xs={8}>
            <CenteredBox>
              <div>
                {content.day}일차 - {content.seq}번째 경로
              </div>
              <div>이동수단 : [{content.transport}]</div>
              <div>
                {content.title} - {content.detail}
              </div>
            </CenteredBox>
          </component.Grid>
          <component.Grid item xs={4}>
            <CenteredBox>
              <component.Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={onUnLocking}
              >
                <span role="img" aria-label="emoji">
                  🔒
                </span>{' '}
                잠금해제 및 수정
              </component.Button>
            </CenteredBox>
          </component.Grid>
        </component.Grid>
      ) : (
        <StyledForm onSubmit={onSubmit}>
          <component.Grid container spacing={2}>
            <component.Grid item xs={8}>
              <StyledTextField
                variant="outlined"
                label="🗼 여행지명"
                type="text"
                name="title"
                fullWidth
                disabled={disabled}
                value={content.title}
                onChange={handleChange}
              />
            </component.Grid>
            <component.Grid item xs={4}>
              <StyledTextField
                variant="outlined"
                label="🚋 이동수단"
                select
                fullWidth
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
            <component.Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                label="📃여행지 설명"
                type="text"
                name="detail"
                multiline
                fullWidth
                disabled={disabled}
                value={content.detail}
                onChange={handleChange}
              />
            </component.Grid>
            <component.Grid item xs={4}>
              <StyledTextField
                variant="outlined"
                label="N일차"
                type="Number"
                name="day"
                fullWidth
                disabled={disabled}
                value={content.day}
                onChange={handleChange}
              />
            </component.Grid>
            <component.Grid item xs={4}>
              <StyledTextField
                variant="outlined"
                label="N일차의 순번"
                type="Number"
                name="seq"
                fullWidth
                disabled={disabled}
                value={content.seq}
                onChange={handleChange}
              />
            </component.Grid>
            <component.Grid item xs={4}>
              <StyledTextField
                variant="outlined"
                label="A에서 B까지"
                type="text"
                name="tofrom"
                fullWidth
                disabled={disabled}
                value={content.tofrom}
                onChange={handleChange}
              />
            </component.Grid>
            <component.Grid item xs={12}>
              {/* <StyledTextField
                variant="outlined"
                label="이미지"
                type="text"
                name="image"
                fullWidth
                disabled={disabled}
                value={content.image}
                onChange={handleChange}
              /> */}
              <ImageUploader
                imageUrl={content.image}
                setImageUrl={setImageUrl}
              />
            </component.Grid>
            <component.Grid item xs={12}>
              <component.Button
                color="secondary"
                variant="contained"
                onClick={onLocking}
                fullWidth
              >
                <span role="img" aria-label="emoji">
                  🔒
                </span>{' '}
                경로 저장 및 잠금
              </component.Button>
            </component.Grid>
          </component.Grid>
        </StyledForm>
      )}
    </MaterialCard>
  );
};

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

const ContentAddForms = () => {
  const { nationId } = useSelector(({ product }) => ({
    nationId: product.nationId,
  }));

  const [contentForms, setContentForms] = useState([
    <ContentsAddForm nationId={nationId} />,
  ]);

  const addForm = () => {
    setContentForms([...contentForms, <ContentsAddForm nationId={nationId} />]);
  };

  return (
    <div>
      <div>
        {contentForms.map((contentForm, idx) => (
          <div key={idx}>{contentForm}</div>
        ))}
      </div>
      <component.Button color="secondary" variant="contained" onClick={addForm}>
        경로 추가하기
      </component.Button>
    </div>
  );
};

export default ContentAddForms;
