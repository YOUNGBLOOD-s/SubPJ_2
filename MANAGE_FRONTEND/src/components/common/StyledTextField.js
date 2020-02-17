import { withStyles } from '@material-ui/core/styles';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: palette.theme[500],
    },
    '& .MuiOutlinedInput-root': {
      // 기본 필드 보더 색상
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: palette.theme[600],
      },
    },
  },
})(component.TextField);

export default StyledTextField;
