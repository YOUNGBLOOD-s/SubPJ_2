import React from 'react';
import component from '../../../../lib/material/component';
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, nextStep } from '../../../../modules/stepper';
import { addRouteList, addImagesList } from '../../../../modules/form';
import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import palette from '../../../../lib/styles/palette';
import LinearProgress from '@material-ui/core/LinearProgress';

const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestWrapper = styled.div`
  display: flex;
  .status-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const Complete = ({ classes, step, steps }) => {
  const dispatch = useDispatch();
  const {
    routes,
    images,
    routesLoading,
    imagesLoading,
    errors,
    completed,
  } = useSelector(({ form, loading }) => ({
    routes: form.routes,
    images: form.images,
    routesLoading: loading['form/ADD_ROUTE_LIST'],
    imagesLoading: loading['form/ADD_IMAGES_LIST'],
    errors: form.errors,
    completed: form.completed,
  }));

  const handleBack = () => {
    dispatch(prevStep());
  };

  const token = sessionStorage.getItem('access_token');

  const handleNextAndComplete = () => {
    if (!completed.routes) {
      dispatch(addRouteList({ token, routes }));
    }

    if (!completed.images) {
      dispatch(addImagesList({ token, images }));
    }

    if (completed.routes && completed.images) {
      dispatch(nextStep());
    }
  };
  return (
    <div>
      <CompleteWrapper>
        <component.Typography variant="h6">
          정말 이대로 등록합니까?
        </component.Typography>

        <component.Typography variant="body2">
          광고 등록 신청 이후에는 관리자가 직접 확인 후 마무리 작업을
          진행합니다.
        </component.Typography>

        <RequestWrapper>
          <div className="status-box">
            {completed.routes ? (
              <CheckBoxIcon style={{ color: palette.green[500] }} />
            ) : (
              <CheckBoxOutlineBlankIcon
                style={{ color: errors.routes ? palette.red[500] : '' }}
              />
            )}
            <div>경로 등록</div>
          </div>
          <div className="status-box">
            {completed.images ? (
              <CheckBoxIcon style={{ color: palette.green[500] }} />
            ) : (
              <CheckBoxOutlineBlankIcon
                style={{ color: errors.images ? palette.red[500] : '' }}
              />
            )}
            <div>이미지 등록</div>
          </div>
        </RequestWrapper>
      </CompleteWrapper>
      <div>
        {(routesLoading || imagesLoading) && (
          <LinearProgress color="secondary" />
        )}
      </div>
      <component.Grid container justify="flex-end">
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
            onClick={handleNextAndComplete}
            className={classes.button}
          >
            {step === steps.length - 1 ? '완료' : '다음'}
          </component.Button>
        </component.Grid>
      </component.Grid>
    </div>
  );
};

export default Complete;
