import React, { useState, useEffect } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import TitleBar from './common/TitleBar';
import TravelRouteItem from './TravelRouteItem';
import CaptionText from './common/CaptionText';
import palette from '../../lib/styles/palette';

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
  .sub {
    color: ${palette.grey[400]};
    font-style: italic;
  }
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
      <TitleBar id="main">
        <span role="img" aria-label="emoji">
          🚵🏾‍♂️
        </span>{' '}
        여행지 한눈에 보기
      </TitleBar>
      <CaptionText>여행 일정별 주요 경로를 인포그래픽으로 체크!</CaptionText>
      {newRoutes ? (
        Object.keys(newRoutes).map(day => {
          const dayRoutes = newRoutes[day];
          const lastRoute = dayRoutes[dayRoutes.length - 1];
          return (
            <StyledPanel key={day}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StyledDay>
                  {day} 일차 <span className="sub">~ {lastRoute.title}</span>
                </StyledDay>
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
