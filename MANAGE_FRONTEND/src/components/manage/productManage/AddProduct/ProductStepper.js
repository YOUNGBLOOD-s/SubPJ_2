import React, { useState } from 'react';
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
import { createContext } from 'react';

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

const getStepContent = (
  step,
  handleBack,
  classes,
  activeStep,
  steps,
  handleNext,
) => {
  const onAddNationSubmit = e => {
    e.preventDefault();
    console.log('국가 생성하기 요청');
  };

  switch (step) {
    case 0:
      return (
        <>
          <NationAddForm onSubmit={onAddNationSubmit} />
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                이전단계로
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                type="submit"
              >
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <ContentAddForms />
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                이전단계로
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <ImageAddForm />
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                이전단계로
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
          </div>
        </>
      );
    default:
      return 'Unknown step';
  }
};

const ProductStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    '상품에 해당하는 국가를 설정하세요',
    '상품의 일차별 경로를 설정하세요',
    '이미지를 등록하세요',
  ];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(
                index,
                handleBack,
                classes,
                activeStep,
                steps,
                handleNext,
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
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
