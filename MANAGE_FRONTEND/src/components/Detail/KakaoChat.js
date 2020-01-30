import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const KakaoChatBlock = styled.div`
  margin: 1rem;
`;

const KakaoChat = () => {
  return (
    <KakaoChatBlock>
      <Button color="primary" variant="contained">
        카톡 챗봇 상담
      </Button>
    </KakaoChatBlock>
  );
};

export default KakaoChat;
