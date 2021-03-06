import React from 'react';
import styled from 'styled-components';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DirectionsBoatOutlinedIcon from '@material-ui/icons/DirectionsBoatOutlined';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';
import getImageUrl from '../../lib/utill/getImageUrl';

const TravelIcons = ({ type }) => {
  const IconStyle = { color: palette.theme[300] };

  if (type === '비행기' || type === '경비행기') {
    return <FlightTakeoffOutlinedIcon style={IconStyle} />;
  } else if (type === '버스') {
    return <AirportShuttleOutlinedIcon style={IconStyle} />;
  } else if (type === '기차') {
    return <TrainOutlinedIcon style={IconStyle} />;
  } else if (type === '차량') {
    return <DirectionsCarOutlinedIcon style={IconStyle} />;
  } else if (type === '유람선' || type === '배') {
    return <DirectionsBoatOutlinedIcon style={IconStyle} />;
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
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const ToFromWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ToFromText = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 0.8rem;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.8rem;
  color: ${palette.grey[500]};
`;

const BarContainer = styled.div`
  height: 100%;
`;

const Bar = styled.div`
  height: 100%;
  width: 0;
  margin: 0 auto;
  border-left: 1px dashed ${palette.grey[400]};
`;

const DottedBar = () => (
  <BarContainer>
    <Bar />
  </BarContainer>
);

const TravelRouteItem = ({ dayRoutes }) => {
  return (
    <div>
      {dayRoutes.map(({ seq, title, detail, transport, tofrom, image }) => (
        <GridContainer container key={seq} spacing={1}>
          <GridItem item xs={1}>
            <IconWrapper>
              <TravelIcons type={transport} />
            </IconWrapper>
          </GridItem>
          <GridItem item xs={11}>
            <ToFromWrapper>
              <ToFromText>{tofrom}까지</ToFromText>
            </ToFromWrapper>
          </GridItem>
          <component.Grid item xs={1}>
            <DottedBar />
          </component.Grid>
          <GridItem item xs={11}>
            <component.Grid item xs={12}>
              {/* TODO: image 수정되면 toLowerCase()삭제 */}
              <RouteImage src={getImageUrl('md', image)} alt="경로별 이미지" />
            </component.Grid>
            {/* NOTICE: title과 detail이 같은 경우는 경유지? 같은느낌. 디테일 생략 */}
            {title === detail ? null : (
              <component.Grid item xs={12}>
                <DetailText>{detail}</DetailText>
              </component.Grid>
            )}
          </GridItem>
        </GridContainer>
      ))}
    </div>
  );
};

export default TravelRouteItem;
