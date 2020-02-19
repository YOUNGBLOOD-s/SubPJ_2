import React from 'react';
import component from '../../../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import styled from 'styled-components';
import MaterialCard from '../../../common/MaterialCard';
import { useDispatch, useSelector } from 'react-redux';
import { addRoute, removeRoute } from '../../../../modules/form';
import ImageUploader from '../../../common/ImageUploader';
import { prevStep, nextStep } from '../../../../modules/stepper';
import transportArr from '../../../../lib/data/transportArr';
import AlertDialog from '../../../common/AlertDialog';

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    '& label.Mui-focused': {
      color: palette.theme[300],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.theme[300],
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

const ContentsAddForm = ({ nationId, en_name }) => {
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
            <component.Grid container spacing={1}>
              <component.Grid item xs={4}>
                <img
                  src={content.image}
                  alt={content.detail}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
              </component.Grid>
              <component.Grid item xs={8}>
                <div>
                  {content.day}일차 - {content.seq}번째 경로 (
                  {content.transport})
                </div>
                <div>제목 : {content.title}</div>
                <p>{content.detail}</p>
              </component.Grid>
            </component.Grid>
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
                경로 수정
              </component.Button>
            </CenteredBox>
          </component.Grid>
        </component.Grid>
      ) : (
        <StyledForm onSubmit={onSubmit}>
          <component.Grid container spacing={2}>
            <component.Grid item xs={12} sm={6}>
              <component.Grid item xs={12}>
                <ImageUploader
                  imageUrl={content.image}
                  setImageUrl={setImageUrl}
                  inputId={`content-image-${content.day}-${content.seq}`}
                  en_name={en_name}
                />
              </component.Grid>
            </component.Grid>
            <component.Grid item xs={12} sm={6}>
              <component.Grid container spacing={1}>
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
                    {transportArr.map(transport => (
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
                  <component.Button
                    color="primary"
                    variant="contained"
                    onClick={onLocking}
                    fullWidth
                  >
                    <span role="img" aria-label="emoji">
                      🔒
                    </span>{' '}
                    경로 저장
                  </component.Button>
                </component.Grid>
              </component.Grid>
            </component.Grid>
          </component.Grid>
        </StyledForm>
      )}
    </MaterialCard>
  );
};

const ContentAddForms = ({ classes, steps, step }) => {
  const { nationId, routes, en_name } = useSelector(({ form }) => ({
    nationId: form.nationId,
    routes: form.routes,
    en_name: form.en_name,
  }));
  const [error, setError] = useState(false);
  const [contentForms, setContentForms] = useState([
    <ContentsAddForm nationId={nationId} en_name={en_name} />,
  ]);

  const addForm = () => {
    setContentForms([
      ...contentForms,
      <ContentsAddForm nationId={nationId} en_name={en_name} />,
    ]);
  };

  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(prevStep());
  };
  const handleNext = () => {
    // FIXME: 모든 경로를 저장(잠금)했는지 확인한다면 좋을텐데..
    if (routes.length === 0) {
      setError(true);
      return;
    }

    for (let route of routes) {
      if (
        route.detail === '' ||
        route.image === '' ||
        route.title === '' ||
        route.tofrom === ''
      ) {
        setError(true);
        return;
      }
    }

    dispatch(nextStep());
  };

  return (
    <div>
      <AlertDialog
        open={error}
        setOpen={setError}
        title="경로설정 오류"
        text="경로가 없거나 잘못된 경로입니다. 경로를 다시한번 확인해주세요."
      />
      <component.Grid container>
        <component.Grid item xs={12}>
          {contentForms.map((contentForm, idx) => (
            <div key={idx}>{contentForm}</div>
          ))}
        </component.Grid>
        <component.Grid item xs={10}>
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
            onClick={handleNext}
            className={classes.button}
          >
            {step === steps.length - 1 ? '완료' : '다음'}
          </component.Button>
        </component.Grid>
        <component.Grid item xs={2}>
          <component.Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={addForm}
            className={classes.button}
          >
            + 경로추가
          </component.Button>
        </component.Grid>
      </component.Grid>
    </div>
  );
};

export default ContentAddForms;
