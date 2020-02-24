import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import palette from '../../../lib/styles/palette';
import getImageUrl from '../../../lib/utill/getImageUrl';

const InfoWrapper = styled.div``;

const GridWrapper = styled.div`
  padding: 7rem 0;
  background-color: ${props => (props.color ? props.color : '')};
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 600px;
  width: auto;
  @media (max-width: 600px) {
    width: 70%;
    height: auto;
  }
  border-radius: 10px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .title-wrapper {
    margin: 1rem 0;
  }
  .title {
    font-family: 'NotoSerifKR';
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
  .text-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
  .text {
    margin-left: 0.5rem;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const MobileImage = styled.img`
  border-radius: 10px;
  height: 600px;
  width: auto;
  text-align: center;
`;

const MobileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckIcon = () => (
  <i className="fas fa-check-circle" style={{ color: 'green' }} />
);

const GradeInfo = () => {
  return (
    <InfoWrapper>
      {/* 첫번째 설명 */}
      <GridWrapper color="#fafafa">
        <Grid container>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image src={getImageUrl('static', 'info1.png')} />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <DescriptionWrapper>
              <div className="title-wrapper">
                <div className="title">광고주가 등록한 상품의</div>
                <div className="title">설명과 사진을 아름답게</div>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  QR 코드 스캔으로 더욱 자세한 정보를 알아보세요
                </span>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  두번의 터치로 예쁜 여행지를 한 눈에 볼 수 있어요
                </span>
              </div>
            </DescriptionWrapper>
          </Grid>
        </Grid>
      </GridWrapper>

      {/* 두번째 설명 */}
      <GridWrapper color={palette.theme[50]}>
        <Grid container direction="row-reverse">
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image src={getImageUrl('static', 'info2.png')} />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <DescriptionWrapper>
              <div className="title-wrapper">
                <div className="title">단지 두번의 터치로 만나는</div>
                <div className="title">전 세계의 아름다운 여행지</div>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  QR 코드 스캔으로 더욱 자세한 정보를 알아보세요
                </span>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  여행지의 이번 달 평균 온도와 습도를 확인해보세요
                </span>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  아름다운 여행지를 한 눈에 담아둘 수 있어요
                </span>
              </div>
            </DescriptionWrapper>
          </Grid>
        </Grid>
      </GridWrapper>

      {/* 세번째 설명 */}
      <GridWrapper>
        <Grid container>
          <Grid item xs={12} md={6}>
            <MobileImgWrapper>
              <MobileImage src={getImageUrl('static', 'minfo1.png')} />
            </MobileImgWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <DescriptionWrapper>
              <div className="title-wrapper">
                <div className="title">QR 코드 스캔을 통해 보이는</div>
                <div className="title">예쁘고 알찬 모바일 페이지</div>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  여행지의 이번 달 평균 온도와 습도를 확인해보세요
                </span>
              </div>
            </DescriptionWrapper>
          </Grid>
        </Grid>
      </GridWrapper>

      {/* 네번째 설명 */}
      <GridWrapper color="#fafafa">
        <Grid container direction="row-reverse">
          <Grid item xs={12} md={6}>
            <MobileImgWrapper>
              <MobileImage src={getImageUrl('static', 'minfo2.png')} />
            </MobileImgWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <DescriptionWrapper>
              <div className="title-wrapper">
                <div className="title">일차별 여행지 정보와</div>
                <div className="title">예쁜 사진을 한 눈에</div>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  여행지 간 이동 경로와 교통편을 확인해보세요
                </span>
              </div>
            </DescriptionWrapper>
          </Grid>
        </Grid>
      </GridWrapper>

      {/* 다섯번째 설명 */}
      <GridWrapper color={palette.theme[50]}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <MobileImgWrapper>
              <MobileImage src={getImageUrl('static', 'minfo3.png')} />
            </MobileImgWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <DescriptionWrapper>
              <div className="title-wrapper">
                <div className="title">여행 관련 약관과 참고사항</div>
                <div className="title">그리고 상담 예약 + 톡상담</div>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  여행약관과 참고 및 주의사항을 확인하세요
                </span>
              </div>

              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  원하는 날짜를 선택해 상담을 예약하세요
                </span>
              </div>
              <div className="text-wrapper">
                <CheckIcon />
                <span className="text">
                  카카오톡 챗봇을 통한 상담도 가능합니다
                </span>
              </div>
            </DescriptionWrapper>
          </Grid>
        </Grid>
      </GridWrapper>
    </InfoWrapper>
  );
};

export default GradeInfo;
