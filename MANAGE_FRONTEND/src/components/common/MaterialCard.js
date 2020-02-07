import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: '1rem',
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
