import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import palette from '../../lib/styles/palette';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: 'white',
  },
});

export default function MaterialCard({ children }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
