import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import palette from '../../../lib/styles/palette';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: '10rem 4rem 10rem 4rem',
  },
}));

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MobileImage = styled.img`
  border-radius: 10px;
  height: 600px;
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 960px) {
    display: block;
    padding-top: 3rem;
  }
`;

const MobileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionTitle = styled.div`
  font-size: 2.5rem;
  line-height: 4rem;
  @media only screen and (max-width: 1430px) {
    font-size: 2.3rem;
  }
`;

const DescriptionContent = styled.div`
  font-size: 1.1rem;
  line-height: 2.5rem;
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
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.grid}
            style={{ backgroundColor: '#fafafa' }}
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <Image src={static_url + '/info1.PNG'} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item style={{ marginLeft: '1rem' }}>
                <DescriptionWrapper>
                  <div>
                    <DescriptionContent>
                      <DescriptionTitle>
                        광고주가 등록한 상품의 <br />
                        설명과 사진을 아름답게
                      </DescriptionTitle>
                      <br />
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'green' }}
                      />{' '}
                      QR 코드 스캔으로 더욱 자세한 정보를 알아보세요
                      <br />
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'green' }}
                      />{' '}
                      두번의 터치로 예쁜 여행지를 한 눈에 볼 수 있어요
                    </DescriptionContent>
                  </div>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.grid}
            direction="row-reverse"
            style={{ backgroundColor: palette.teal[50] }}
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <Image src={static_url + '/info2.PNG'} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item style={{ marginLeft: '1rem' }}>
                <DescriptionWrapper>
                  <div>
                    <DescriptionContent>
                      <DescriptionTitle>
                        단지 두번의 터치로 만나는
                        <br />전 세계의 아름다운 여행지
                      </DescriptionTitle>
                      <br />
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'green' }}
                      />{' '}
                      QR 코드 스캔으로 더욱 자세한 정보를 알아보세요
                      <br />
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'green' }}
                      />{' '}
                      여행지의 이번 달 평균 온도와 습도를 확인해보세요
                      <br />
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'green' }}
                      />{' '}
                      아름다운 여행지를 한 눈에 담아둘 수 있어요
                    </DescriptionContent>
                  </div>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <MobileImgWrapper>
                  <MobileImage src={static_url + '/minfo1.PNG'} />
                </MobileImgWrapper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item>
                <DescriptionWrapper>
                  <DescriptionContent>
                    <DescriptionTitle>
                      QR 코드 스캔을 통해 보이는
                      <br />
                      예쁘고 알찬 모바일 페이지!
                    </DescriptionTitle>
                    <br />
                    <i
                      className="fas fa-check-circle"
                      style={{ color: 'green' }}
                    />{' '}
                    여행지의 이번 달 평균 온도와 습도를 확인해보세요
                    <br />
                  </DescriptionContent>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.grid}
            direction="row-reverse"
            style={{ backgroundColor: '#fafafa' }}
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <MobileImgWrapper>
                  <MobileImage src={static_url + '/minfo2.PNG'} />
                </MobileImgWrapper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item style={{ marginLeft: '1rem' }}>
                <DescriptionWrapper>
                  <DescriptionTitle>
                    광고판에서 QR코드 스캔 시 상품 상세 정보 확인
                  </DescriptionTitle>
                </DescriptionWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.grid}
            style={{ backgroundColor: palette.teal[50] }}
          >
            <Grid item xs={12} md={6}>
              <Grid item>
                <MobileImgWrapper>
                  <MobileImage src={static_url + '/minfo3.PNG'} />
                </MobileImgWrapper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item>
                <DescriptionWrapper>
                  <DescriptionTitle>
                    광고판에서 QR코드 스캔 시 상품 상세 정보 확인
                  </DescriptionTitle>
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
