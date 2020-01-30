import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import TitleBar from './TitleBar';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const TravleRouteBlock = styled.div`
  margin: 1rem;
  width: '100%';
`;

const StyledDay = styled.span`
  font-weight: bold;
`;

const TravelIcons = ({ type }) => {
  if (type === '비행기') {
    return <AirplanemodeActiveIcon />;
  } else if (type === '버스') {
    return <AirportShuttleIcon />;
  } else {
    return null;
  }
};

const TravelRoute = ({ routes }) => {
  console.log(routes);
  return (
    <TravleRouteBlock>
      <TitleBar text="여행 경로" />
      {routes.map(({ nation, day, seq, title, detail, image, tofrom }, idx) => (
        <ExpansionPanel key={idx}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {/* <TravelIcons type={transport} /> */}
              <StyledDay>{day} 일차</StyledDay> {tofrom}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography varient="body1">{detail}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </TravleRouteBlock>
  );
};

export default TravelRoute;
