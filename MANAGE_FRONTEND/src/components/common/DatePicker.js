import React from 'react';
import koLocale from 'date-fns/locale/ko';
import palette from '../../lib/styles/palette';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';

const StyledDatePicker = withStyles({
  root: {
    '& label.Mui-focused': {
      color: palette.red[200],
    },
  },
})(KeyboardDatePicker);

const DatePicker = ({ value, onChange, label }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
      <StyledDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="yyyy년 MM월 dd일"
        value={value}
        onChange={onChange}
        fullWidth
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
