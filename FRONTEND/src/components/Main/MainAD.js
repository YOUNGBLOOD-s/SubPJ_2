import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router-dom';
import FullScreenDialog from '../common/FullScreenDialog';
import Axios from '../../../node_modules/axios/index';
import LoadingBackdrop from '../common/LoadingBackdrop';

const TitleWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 5rem;
  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  padding: 20px 30px 0 30px;
`;

const EnTitle = styled.div`
  font-size: 3.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 2.7rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  font-weight: bold;
  color: #aaaaaa;
  text-align: left;
  padding: 50px 0 0 0;
`;

const Content = styled.div`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  color: #dddddd;
  text-align: left;
  padding: 10px 70px;
`;

const MainADBlock = styled.div`
  /* * {
    padding: 0px;
  } */
  .bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .style {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .box {
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    );
    position: absolute;
    display: block;
    z-index: 99;
    width: 100%;
    height: 50%;
  }
  img.qr {
    z-index: 999;
    width: 20vh;
    height: 20vh;
    @media only screen and (max-width: 768px) {
      width: 15vh;
      height: 15vh;
    }
    position: absolute;
    right: 4%;
    bottom: 4%;
    padding: 7px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

// const datas = [
//   {
//     id: '1',
//     title: '코타키나발루',
//     content:
//       '말레이시아 코타키나발루(KKUM)는 보르네오섬 북동쪽에 있는 사바(Sabah) 주의 주도로 보르네오 섬 최대의 도시입니다.',
//     img: '/static/img/코타키나발루.jpg',
//     nextURL: 'http://choiys.kr',
//   },
//   {
//     id: '2',
//     title: '블라디보스토크',
//     content:
//       '블라디보스토크(러시아어: Владивосто́к)는 러시아의 도시이다. 러시아 극동의 중심지이며 프리모르스키 지방의 행정중심지이다.',
//     img: '/static/img/블라디보스토크.jpg',
//     nextURL: 'http://portfolio.choiys.kr',
//   },
// ];

const MainAD = () => {
  const publicURL = process.env.PUBLIC_URL;

  const [pid, setPid] = useState(1);
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState(null);

  const onDoubleClick = index => {
    // history.push(`/detail/${id}`);
    setPid(index);
    setOpen(true);
  };

  useEffect(() => {
    Axios.get('http://52.78.218.79:8887/api/sensor/reco')
      // Axios.get('http://192.168.100.66:8887/api/sensor/reco') // test backend
      .then(res => {
        setDatas(res.data.datas);
      })
      .then(err => console.log(err));
  }, []);

  return (
    <MainADBlock>
      {datas ? (
        <>
          <Carousel
            infiniteLoop
            autoPlay
            emulateTouch
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            transitionTime={1000}
            interval={5000}
          >
            {datas.map(({ id, name, en_name, content, thumbnail }, index) => (
              <div key={id} onDoubleClick={() => onDoubleClick(index)}>
                <div className="style">
                  <div className="box">
                    <TitleWrapper>
                      <Title>{name}</Title> <EnTitle>{en_name}</EnTitle>
                    </TitleWrapper>
                    <Content>{content}</Content>
                  </div>
                  <img
                    className="bg"
                    // src={publicURL + '/static/img/코타키나발루.jpg'}
                    src={thumbnail}
                    alt=""
                  />
                </div>
                <img
                  className="qr"
                  // src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://portfolio.choiys.kr`}
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://52.78.218.79:8282/detail/${id}`}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
          <FullScreenDialog data={datas[pid]} setOpen={setOpen} open={open} />
        </>
      ) : (
        <LoadingBackdrop loading={true} />
      )}
    </MainADBlock>
  );
};

export default withRouter(MainAD);
