import React from 'react';
import styled from 'styled-components';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsBoatOutlinedIcon from '@material-ui/icons/DirectionsBoatOutlined';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';

const TravelIcons = ({ type }) => {
  if (type === '비행기' || type === '경비행기') {
    return <FlightTakeoffOutlinedIcon style={{ color: palette.theme }} />;
  } else if (type === '버스') {
    return <AirportShuttleOutlinedIcon style={{ color: palette.theme }} />;
  } else if (type === '기차') {
    return <TrainOutlinedIcon style={{ color: palette.theme }} />;
  } else if (type === '차량') {
    return <DirectionsCarOutlinedIcon style={{ color: palette.theme }} />;
  } else if (type === '유람선' || type === '배') {
    return <DirectionsBoatOutlinedIcon style={{ color: palette.theme }} />;
  } else {
    return null;
  }
};

const GridContainer = styled(component.Grid)`
  margin-bottom: 1rem;
`;
const GridItem = styled(component.Grid)``;

const RouteImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ToFromText = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  /* margin: 0.5rem 0; */
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const DetailText = styled.div`
  text-align: cetner;
`;

const TravelRouteItem = ({ dayRoutes }) => {
  console.log(dayRoutes);
  // FIXME: 나중에 이미지 넣어지면 경로를 dayRoutes에서 받는걸로 수정할것
  const image =
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
  return (
    <div>
      {dayRoutes.map(({ seq, title, detail, transport, tofrom }) => (
        <GridContainer container key={seq} spacing={1}>
          {/* NOTICE: title과 detail이 같은 경우는 경유지? 같은느낌 */}
          {title === detail ? (
            <>
              <GridItem item xs={1}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TravelIcons type={transport} />
                </div>
              </GridItem>
              <GridItem item xs={11}>
                <ToFromText>{tofrom}까지</ToFromText>
              </GridItem>
              <GridItem item xs={1}>
                ...
              </GridItem>
              <GridItem item xs={11}>
                <div>
                  <RouteImage src={image} alt="경로별 이미지" />
                </div>
              </GridItem>
            </>
          ) : (
            <>
              <GridItem item xs={1}>
                <TravelIcons type={transport} />
              </GridItem>
              <GridItem item xs={11}>
                <ToFromText>{tofrom}까지</ToFromText>
              </GridItem>
              <GridItem item xs={1}>
                ...
              </GridItem>
              <GridItem item xs={11}>
                <component.Grid container>
                  <component.Grid item xs={12}>
                    <RouteImage src={image} alt="경로별 이미지" />
                  </component.Grid>
                  <component.Grid item xs={12}>
                    <DetailText>{detail}</DetailText>
                  </component.Grid>
                </component.Grid>
              </GridItem>
            </>
          )}
        </GridContainer>
      ))}
    </div>
  );
};

export default TravelRouteItem;
