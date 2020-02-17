import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import palette from '../../lib/styles/palette';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: palette.theme[200],
    minHeight: '100px',
    color: 'white',
  },
}));

const ManageFooter = () => {
  const classes = useStyles();
  const spacing = 10;
  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>footer</Grid>
            <Grid item>footer</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageFooter;
