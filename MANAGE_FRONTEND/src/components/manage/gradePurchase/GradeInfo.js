import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Image = styled.img`
  width: 600px;
  height: 285px;
`;

const ImageDescription = styled.div`
  text-align: center;
`;

const GradeInfo = () => {
  const classes = useStyles();
  const spacing = 2;
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Grid item>
                <Image src={process.env.PUBLIC_URL + '/img/info1.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>asdf</ImageDescription>
              </Grid>
            </Grid>
            <Grid item>
              <Image src={process.env.PUBLIC_URL + '/img/info2.png'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GradeInfo;
