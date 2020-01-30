import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import TitleBar from './TitleBar';
import { useState } from 'react';
import { useEffect } from 'react';
import DayRouteDetail from './DayRouteDetail';

const TravleRouteBlock = styled.div`
  margin: 1rem;
  width: '100%';
`;

const StyledDay = styled.span`
  font-weight: bold;
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
      <TitleBar text="여행 경로" />
      {newRoutes ? (
        Object.keys(newRoutes).map(day => {
          const dayRoutes = newRoutes[day];
          return (
            <ExpansionPanel key={day}>
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
                <DayRouteDetail dayRoutes={dayRoutes} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
