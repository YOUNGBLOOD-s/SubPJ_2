import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Title = styled.div`
  font-size: 2.3em;
  font-weight: bold;
  margin-top: 20px;
  color: #ffffff;
  padding-left: 20px;
`;

const Content = styled.div`
  margin-top: 10px;
  color: #ffffff;
  font-size: 1.3em;
  padding-left: 20px;
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
  img.qr {
    z-index: 999;
    width: 20vh;
    height: 20vh;
    position: absolute;
    right: 4%;
    top: 73%;
    padding: 7px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const datas = [
  {
    id: "1",
    title: "코타키나발루",
    content:
      "말레이시아 코타키나발루(KKUM)는 보르네오섬 북동쪽에 있는 사바(Sabah) 주의 주도로 보르네오 섬 최대의 도시입니다.",
    img: "/static/img/코타키나발루.jpg",
    nextURL: "http://choiys.kr"
  },
  {
    id: "2",
    title: "블라디보스토크",
    content:
      "블라디보스토크(러시아어: Владивосто́к)는 러시아의 도시이다. 러시아 극동의 중심지이며 프리모르스키 지방의 행정중심지이다.",
    img: "/static/img/블라디보스토크.jpg",
    nextURL: "http://portfolio.choiys.kr"
  }
];
const MainAD = () => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <MainADBlock>
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
        {datas.map(({ title, content, img, nextURL }) => (
          <>
            <div className="style">
              <div className="box">
                <Title>{title}</Title>
                <Content>{content}</Content>
              </div>
              <img className="bg" src={publicURL + img} />
            </div>
            <img
              className="qr"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nextURL}`}
            />
          </>
        ))}
      </Carousel>
    </MainADBlock>
  );
};

export default MainAD;
