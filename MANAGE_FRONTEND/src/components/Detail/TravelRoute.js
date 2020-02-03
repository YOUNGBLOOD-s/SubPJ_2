import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import TitleBar from './common/TitleBar';
import { useState } from 'react';
import { useEffect } from 'react';
import TravelRouteItem from './TravelRouteItem';
import CaptionText from './common/CaptionText';

const TravleRouteBlock = styled.div`
  margin: 1rem 0.5rem;
  width: '100%';
  .MuiExpansionPanelDetails-root {
    padding: 8px 12px;
  }
`;

const StyledDay = styled.span`
  font-weight: bold;
  font-family: 'Nanum Myeongjo', serif;
`;

const StyledPanel = styled(ExpansionPanel)`
  background-color: white;
`;

const TravelRoute = ({ routes }) => {
  const [newRoutes, setNewRoutes] = useState(null);

  useEffect(() => {
    let new_nation = {};
    for (let route of routes) {
      if (new_nation[route.day]) {
        new_nation[route.day].push(route);
      } else {
        new_nation[route.day] = [route];
      }
    }
    setNewRoutes(new_nation);
  }, [routes]);

  return (
    <TravleRouteBlock>
      <TitleBar id="main">🚵🏾‍♂️ 여행지 한눈에 보기</TitleBar>
      <CaptionText>여행 일정별 주요 경로를 인포그래픽으로 체크!</CaptionText>
      {newRoutes ? (
        Object.keys(newRoutes).map(day => {
          const dayRoutes = newRoutes[day];
          return (
            <StyledPanel key={day}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <StyledDay>{day} 일차</StyledDay>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TravelRouteItem dayRoutes={dayRoutes} />
              </ExpansionPanelDetails>
            </StyledPanel>
          );
        })
      ) : (
        // STYLE: 깔끔한 컴포넌트로 바꿀것
        <div>loading...</div>
      )}
    </TravleRouteBlock>
  );
};

export default TravelRoute;
