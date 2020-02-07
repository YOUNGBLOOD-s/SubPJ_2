import React, { useState } from 'react';
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
  mobileinfo: {
    color: 'white',
  },
}));

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MobileImage = styled.img`
  border-radius: 10px;
  height: 600px;
  padding-left: 1rem;
  @media only screen and (max-width: 1430px) {
    height: 500px;
    width: auto;
  }
  @media only screen and (max-width: 1300px) {
    height: 450px;
    width: auto;
  }
  @media only screen and (max-width: 1175px) {
    height: 400px;
    width: auto;
  }
  @media only screen and (max-width: 1060px) {
    height: 350px;
    width: auto;
  }
  @media only screen and (max-width: 960px) {
    height: 600px;
    width: auto;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

const MobileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const DescriptionContent = styled.div`
  font-size: 1.1rem;
  line-height: 3rem;
`;

const MobileDescriptionContent = styled.div`
  line-height: 6rem;
  font-size: 1.1rem;
  @media only screen and (max-width: 1430px) {
    line-height: 4rem;
    font-size: 90%;
  }
  @media only screen and (max-width: 1300px) {
    line-height: 3rem;
    font-size: 87%;
  }
  @media only screen and (max-width: 1060px) {
    line-height: 2rem;
    font-size: 85%;
  }
  @media only screen and (max-width: 960px) {
    font-size: 1.1rem;
    line-height: 3rem;
  }
`;

const GradeInfo = () => {
  const classes = useStyles();
  const static_url =
    'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/manage';
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" className={classes.grid}>
            <Grid item xs={12} md={6}>
              <Grid item>
                <Image src={static_url + '/info1.png'} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item style={{ marginLeft: '1rem' }}>
                <DescriptionWrapper>
                  <div>
                    <DescriptionTitle>메인페이지</DescriptionTitle>
                    <DescriptionContent style={{ lineHeight: '5rem' }}>
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
                  </div>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="flex-start"
            className={classes.grid}
            direction="row-reverse"
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <Image src={static_url + '/info2.png'} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item style={{ marginLeft: '1rem' }}>
                <DescriptionWrapper>
                  <div>
                    <DescriptionTitle>상세페이지 (두번 터치)</DescriptionTitle>
                    <DescriptionContent style={{ lineHeight: '4rem' }}>
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
                  </div>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-start" className={classes.grid}>
            <Grid item xs={12} md={8}>
              <Grid item>
                <MobileImgWrapper>
                  <MobileImage src={static_url + '/minfo1.png'} />
                  <MobileImage src={static_url + '/minfo2.png'} />
                  <MobileImage src={static_url + '/minfo3.png'} />
                </MobileImgWrapper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid item className={classes.mobileinfo}>
                <DescriptionWrapper>
                  <div>
                    <DescriptionTitle>
                      모바일 상세페이지 (QR코드)
                    </DescriptionTitle>
                    <MobileDescriptionContent>
                      광고판에서 QR코드 스캔 시 상품 상세 정보 확인
                      <br />
                      <i
                        class="fas fa-check-circle"
                        style={{ color: 'white' }}
                      />{' '}
                      해당 나라의 대표 이미지, 온도, 습도 확인
                      <br />
                      <i
                        class="fas fa-check-circle"
                        style={{ color: 'white' }}
                      />{' '}
                      일차별 여행 경로, 교통편 확인
                      <br />
                      <i
                        class="fas fa-check-circle"
                        style={{ color: 'white' }}
                      />{' '}
                      여행 약관 및 참고사항 확인
                      <br />
                      <i
                        class="fas fa-check-circle"
                        style={{ color: 'white' }}
                      />{' '}
                      간편 상담 예약 가능
                      <br />
                      <i
                        class="fas fa-check-circle"
                        style={{ color: 'white' }}
                      />{' '}
                      카카오톡 챗봇을 통한 간편 정보 확인
                    </MobileDescriptionContent>
                  </div>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GradeInfo;
