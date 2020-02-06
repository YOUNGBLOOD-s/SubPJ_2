import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
  },
}));

const Image = styled.img`
  height: 285px;
  border-radius: 10px;
`;

const MobileImage = styled.img`
  border-radius: 10px;
  height: 600px;
`;

const ImageDescription = styled.div`
  text-align: center;
  font-weight: bolder;
  color: white;
`;

const GradeInfo = () => {
  const classes = useStyles();
  // const spacing = 2;
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Grid item>
                <Image src={process.env.PUBLIC_URL + '/img/info1.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>[1-1] 광고 메인 페이지</ImageDescription>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <Image src={process.env.PUBLIC_URL + '/img/info2.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>[1-2] 광고 상세 페이지</ImageDescription>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ marginTop: '2rem' }}
            spacing={2}
          >
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo1.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>
                  [2-1] QR코드 연결 모바일 페이지
                </ImageDescription>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo2.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>
                  [2-2] QR코드 연결 모바일 페이지
                </ImageDescription>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo3.png'} />
              </Grid>
              <Grid item>
                <ImageDescription>
                  [2-3] QR코드 연결 모바일 페이지
                </ImageDescription>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GradeInfo;
