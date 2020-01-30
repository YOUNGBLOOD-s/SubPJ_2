import React from 'react';
import styled from 'styled-components';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import component from '../../lib/component/index';

const TravelIcons = ({ type }) => {
  if (type === '비행기') {
    return <AirplanemodeActiveIcon />;
  } else if (type === '버스') {
    return <AirportShuttleIcon />;
  } else if (type === '기차') {
    return null;
  } else {
    return null;
  }
};

const DayRouteBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RouteImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ToFromText = styled(component.Typography)``;

const DayRouteDetail = ({ dayRoutes }) => {
  console.log(dayRoutes);
  // FIXME: 나중에 이미지 넣어지면 경로를 dayRoutes에서 받는걸로 수정할것
  const image =
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
  return (
    <div>
      {dayRoutes.map(({ seq, title, detail, transport, tofrom }) => (
        <DayRouteBlock key={seq}>
          {/* NOTICE: title과 detail이 같은 경우는 경유지? 같은느낌 */}
          {title === detail ? (
            <>
              <ToFromText variant="h4">
                <TravelIcons type={transport} /> {tofrom}까지
              </ToFromText>
              <RouteImage src={image} alt="경로별 이미지" />
            </>
          ) : (
            <>
              <ToFromText variant="h4">
                <TravelIcons type={transport} /> {tofrom}
              </ToFromText>
              <div>{title}</div>
              <div>{detail}</div>
              <RouteImage src={image} alt="경로별 이미지" />
            </>
          )}
        </DayRouteBlock>
      ))}
    </div>
  );
};

export default DayRouteDetail;
