import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: '0 4rem 0 4rem',
    marginBottom: '4rem',
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

const DescriptionWrapper = styled.div`
  text-align: center;
`;

const DescriptionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const DescriptionContent = styled.div`
  font-size: 1.1rem;
  line-height: 3rem;
`;

const GradeInfo = () => {
  const classes = useStyles();
  // const spacing = 2;
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" className={classes.grid}>
            <Grid item xs={1} />
            <Grid item xs={6}>
              <Grid item>
                <Image src={process.env.PUBLIC_URL + '/img/info1.png'} />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item>
                <DescriptionTitle>메인페이지</DescriptionTitle>
                <DescriptionContent>
                  등록한 상품의 국가 및 사진, 소개
                  <br />
                  <i
                    class="fas fa-check-circle"
                    style={{ color: 'green' }}
                  />{' '}
                  QR 코드 스캔 시 상품 상세 정보 확인
                  <br />
                  <i
                    class="fas fa-check-circle"
                    style={{ color: 'green' }}
                  />{' '}
                  두번 터치 시 국가의 대표 여행지 확인
                </DescriptionContent>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" className={classes.grid}>
            <Grid item xs={1} />
            <Grid item xs={4}>
              <Grid item>
                <DescriptionTitle>상세페이지 (두번 터치)</DescriptionTitle>
                <DescriptionContent>
                  해당 국가의 여행지 정보 확인
                  <br />
                  <i
                    class="fas fa-check-circle"
                    style={{ color: 'green' }}
                  />{' '}
                  QR 코드 스캔 시 상품 상세 정보 확인
                  <br />
                  <i
                    class="fas fa-check-circle"
                    style={{ color: 'green' }}
                  />{' '}
                  해당 국가의 이번 달 평균 온도 및 습도
                  <br />
                  <i
                    class="fas fa-check-circle"
                    style={{ color: 'green' }}
                  />{' '}
                  대표 여행지 사진 및 소개
                </DescriptionContent>
              </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={6}>
              <Grid item>
                <Image src={process.env.PUBLIC_URL + '/img/info2.png'} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            style={{ marginTop: '2rem' }}
            spacing={1}
          >
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo1.png'} />
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo2.png'} />
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <MobileImage src={process.env.PUBLIC_URL + '/img/minfo3.png'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GradeInfo;
