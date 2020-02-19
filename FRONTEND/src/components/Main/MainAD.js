import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router-dom';
import FullScreenDialog from '../common/FullScreenDialog';
import Axios from '../../../node_modules/axios/index';
import LoadingBackdrop from '../common/LoadingBackdrop';
import { LazyImageProvider } from '../common/LazyImage/LazyImageContext';
import { LazySoundProvider } from '../common/LazyImage/LazySoundContext';
import LazyImage from '../common/LazyImage/LazyImage';
import ClickNotice from '../common/ClickNotice';
import Sound from 'react-sound';
import getImageUrl from '../../lib/util/getImageUrl';
import getSpeechUrl from '../../lib/util/getSpeechUrl';
import LazySound from '../common/LazyImage/LazySound';
import SoundPlayer from '../common/SoundPlayer';

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
    font-size: 3rem;
    padding: 45px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 40px 0;
    font-size: 2rem;
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
`;

const MainAD = () => {
  const [pid, setPid] = useState(1);
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState(null);
  const [soundtimer, setSoundtimer] = useState([]);

  let where = 0;

  useEffect(() => {}, [where]);

  const onDoubleClick = (id, index) => {
    Axios.get('https://i02c110.p.ssafy.io:8887/api/ad/click/' + id)
      .then(res => console.log(res))
      .catch(err => console.log('Click Count 요청 실패!'));
    setPid(index);
    setOpen(true);
  };

  const itemNum = 8;
  const carouselTerm = 10000;
  var reqTerm = carouselTerm * itemNum + 2000;

  const getItems = () => {
    Axios.get('https://i02c110.p.ssafy.io:8887/api/sensor/reco')
      // Axios.get('http://192.168.100.66:8887/api/sensor/reco') // test backend
      .then(res => {
        setDatas(res.data.datas);
        setSoundtimer([]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getItems();
    setInterval(() => {
      if (open === false) getItems();
    }, reqTerm);
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
            interval={carouselTerm}
            stopOnHover={false}
          >
            {datas.map(({ id, name, en_name, content, thumbnail }, index) => {
              return (
                <div key={id} onDoubleClick={() => onDoubleClick(id, index)}>
                  <div className="style">
                    <div className="box">
                      <TitleWrapper>
                        <Title>{name}</Title> <EnTitle>{en_name}</EnTitle>
                      </TitleWrapper>
                      <Content>{content}</Content>
                    </div>
                    <LazyImageProvider>
                      <LazyImage
                        isQR={false}
                        src={getImageUrl('md', thumbnail)}
                        alt=""
                      />
                    </LazyImageProvider>
                    {/* <Sound
                      onPlaying={8000}
                      url={getSpeechUrl(id)}
                      playStatus={Sound.status.PAUSED}
                      playFromPosition={0}
                      onLoading={Sound.handleSongLoading}
                      onPlaying={Sound.handleSongPlaying}
                      onFinishedPlaying={Sound.handleSongFinishedPlaying}
                    /> */}
                  </div>
                  <LazyImage
                    isQR={true}
                    // src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://portfolio.choiys.kr`}
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://i02c110.p.ssafy.io:8282/detail/${id}?qr=true`}
                    alt=""
                  />
                  <SoundPlayer
                    src={getSpeechUrl(id)}
                    delay={1000 + 10000 * index}
                    soundtimer={soundtimer}
                    setSoundtimer={setSoundtimer}
                  />

                  <ClickNotice />
                </div>
              );
            })}
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
