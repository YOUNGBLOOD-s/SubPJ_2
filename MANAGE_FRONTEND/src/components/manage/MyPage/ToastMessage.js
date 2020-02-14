import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    position: 'absolute',
    top: 0,
  },
}));

const ToastMessage = ({ setOpen, open }) => {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      {open ? (
        <Alert onClose={handleClose} severity="error">
          패스워드가 일치하지 않습니다.
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToastMessage;
