import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NationAddForm from './NationAddForm';
import ContentAddForms from './ContentsAddForms';
import ImageAddForm from './ImageAddForm';
import { useSelector } from 'react-redux';
import Complete from './Complete';

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
      return <ImageAddForm />;
    case 2:
      return <ContentAddForms />;
    case 3:
      return <Complete classes={classes} steps={steps} step={step} />;
    default:
      return '알수없는 단계';
  }
};

const ProductStepper = () => {
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

  const handleReset = () => {
    // TODO: 0으로 만드는 액션 생성하여 디스패치
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
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>광고 등록의 모든 단계가 완료되었습니다!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default ProductStepper;
