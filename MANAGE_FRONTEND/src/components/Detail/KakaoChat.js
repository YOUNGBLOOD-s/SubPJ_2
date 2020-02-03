import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const KakaoChatBlock = styled.div`
  margin: 1rem;
  position: fixed;
  top: 1vh;
  right: 1vw;
`;

const KakaoChat = () => {
  let KakaoInstance = useRef(null);

  useEffect(() => {
    KakaoInstance.current = window.Kakao;
    KakaoInstance.current.init('3e842b6f12a584d6f13dc99372a30877');
  });

  const chatChannel = () => {
    KakaoInstance.current.Channel.chat({
      channelPublicId: '_HzjExb', // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
    });
  };

  return (
    <KakaoChatBlock>
      <div onClick={chatChannel}>
        <img src="https://developers.kakao.com/assets/img/about/logos/channel/consult_small_yellow_pc.png" />
      </div>
    </KakaoChatBlock>
  );
};

export default KakaoChat;
