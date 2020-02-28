import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '4rem',
    left: '1rem',
  },
});

const SessionContent = ({ min, sec, onClick }) => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.root}
      icon={<FaceIcon />}
      label={'세션 만료 : ' + min + '분 ' + sec + '초'}
      clickable
      color="primary"
      onClick={onClick}
      deleteIcon={<DoneIcon />}
      variant="outlined"
    />
  );
};

export default SessionContent;
