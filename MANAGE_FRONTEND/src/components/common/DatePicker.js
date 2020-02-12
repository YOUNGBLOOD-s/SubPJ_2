import React, { useState } from 'react';
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

const DatePicker = ({ value, onChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
      <StyledDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="예약 날짜 선택"
        format="yyyy년 MM월 dd일"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
