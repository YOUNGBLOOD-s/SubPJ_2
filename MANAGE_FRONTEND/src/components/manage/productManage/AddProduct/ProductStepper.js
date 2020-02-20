import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import NationAddForm from './NationAddForm';
import ContentAddForms from './ContentsAddForms';
import ImageAddForm from './ImageAddForm';
import { useSelector, useDispatch } from 'react-redux';
import Complete from './Complete';
import { initializeForm } from '../../../../modules/form';
import { initializeStep } from '../../../../modules/stepper';
import component from '../../../../lib/material/component';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const getStepContent = (step, classes, steps) => {
  switch (step) {
    case 0:
      return <NationAddForm classes={classes} steps={steps} step={step} />;
    case 1:
      return <ImageAddForm classes={classes} steps={steps} step={step} />;
    case 2:
      return <ContentAddForms classes={classes} steps={steps} step={step} />;
    case 3:
      return <Complete classes={classes} steps={steps} step={step} />;
    default:
      return '알수없는 단계';
  }
};

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    margin-top: 1rem;
  }
`;

const ProductStepper = ({ history }) => {
  const classes = useStyles();
  const { step } = useSelector(({ stepper }) => ({
    step: stepper.step,
  }));
  const steps = [
    '상품에 해당하는 국가를 설정하세요',
    '날씨별 대표 이미지를 등록하세요',
    '상품의 일차별 경로 세부사항을 설정하세요',
    '등록을 완료하세요',
  ];

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(initializeForm());
    dispatch(initializeStep());
    history.push('/management');
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>{getStepContent(index, classes, steps)}</StepContent>
          </Step>
        ))}
      </Stepper>
      {step === steps.length && (
        <TextWrapper>
          <component.Typography variant="h5">등록완료</component.Typography>
          <component.Typography variant="body1">
            광고등록의 모든 단계가 완료되었습니다!
          </component.Typography>
          <component.Button
            className="btn"
            onClick={onClick}
            color="primary"
            variant="outlined"
          >
            메인페이지로 가기
          </component.Button>
        </TextWrapper>
      )}
    </div>
  );
};

export default withRouter(ProductStepper);
