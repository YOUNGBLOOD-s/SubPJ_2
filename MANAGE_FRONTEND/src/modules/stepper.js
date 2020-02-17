import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_STEP = 'stepper/INITIALIZE_STEP';
const NEXT_STEP = 'stepper/NEXT_STEP';
const PREV_STEP = 'stepper/PREV_STEP';
const RESET_STEP = 'stepper/RESET_STEP';

export const initializeStep = createAction(INITIALIZE_STEP);
export const nextStep = createAction(NEXT_STEP, step => step);
export const prevStep = createAction(PREV_STEP, step => step);
export const resetStep = createAction(RESET_STEP, step => step);

const initialState = {
  step: 1,
};

const stepper = handleActions(
  {
    [INITIALIZE_STEP]: () => initialState,
    [NEXT_STEP]: state => ({
      step: state.step + 1,
    }),
    [PREV_STEP]: state => ({
      step: state.step - 1,
    }),
    [RESET_STEP]: () => ({
      step: 0,
    }),
  },
  initialState,
);

export default stepper;
