import { createAction, handleActions } from 'redux-actions';

const NEXT_STEP = 'stepper/NEXT_STEP';
const PREV_STEP = 'stepper/PREV_STEP';

export const nextStep = createAction(NEXT_STEP, step => step);
export const prevStep = createAction(PREV_STEP, step => step);

const initialState = {
  step: 0,
};

const stepper = handleActions(
  {
    [NEXT_STEP]: state => ({
      step: state.step + 1,
    }),
    [PREV_STEP]: state => ({
      step: state.step - 1,
    }),
  },
  initialState,
);

export default stepper;
