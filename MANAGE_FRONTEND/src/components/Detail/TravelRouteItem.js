import React from 'react';
import styled from 'styled-components';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsBoatOutlinedIcon from '@material-ui/icons/DirectionsBoatOutlined';
import palette from '../../lib/styles/palette';

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

const TravelRouteItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RouteImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const ToFromText = styled.h4`
  font-family: 'Nanum Myeongjo', serif;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const TravelRouteItem = ({ dayRoutes }) => {
  console.log(dayRoutes);
  // FIXME: 나중에 이미지 넣어지면 경로를 dayRoutes에서 받는걸로 수정할것
  const image =
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
  return (
    <div>
      {dayRoutes.map(({ seq, title, detail, transport, tofrom }) => (
        <TravelRouteItemBlock key={seq}>
          {/* NOTICE: title과 detail이 같은 경우는 경유지? 같은느낌 */}
          {title === detail ? (
            <>
              <TravelIcons type={transport} />
              <ToFromText>{tofrom}까지</ToFromText>
              <RouteImage src={image} alt="경로별 이미지" />
            </>
          ) : (
            <>
              <TravelIcons type={transport} />
              <ToFromText variant="h4">{tofrom}</ToFromText>
              <RouteImage src={image} alt="경로별 이미지" />
              {/* <div>{title}</div> */}
              <div>{detail}</div>
            </>
          )}
        </TravelRouteItemBlock>
      ))}
    </div>
  );
};

export default TravelRouteItem;
