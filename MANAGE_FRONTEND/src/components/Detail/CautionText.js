import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TitleBar from './common/TitleBar';
import CaptionText from './common/CaptionText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const CautionTextBlock = styled.div`
  margin: 0.5rem;
`;

const StyledPanel = styled(ExpansionPanel)`
  background-color: white;
`;

const CautionText = ({ category }) => {
  const cautions = fakeAlert['Europe'];
  return (
    <CautionTextBlock>
      <TitleBar>🚧 여행시 유의사항</TitleBar>
      <CaptionText>유의해야할 점들을 알려드립니다.</CaptionText>
      {cautions.map((caution, idx) => (
        <StyledPanel key={idx}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{caution.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{caution.content}</ExpansionPanelDetails>
        </StyledPanel>
      ))}
    </CautionTextBlock>
  );
};

export default CautionText;

const fakeAlert = {
  Common: [
    {
      title: '●안전사고',
      content: `
      - 여행자 본인의 과실에 의한 안전사고의 책임은 전적으로 본인에게 있으며 선택관광의 참여 시 반드시 가이드로부터 안전에 대한 주의사항을 안내 받고 현지 기후, 건강상태, 예상되는 위험을 고려하여 참여 여부를 결정하시기 바랍니다. 가이드의 주의사항을 무시하거나 예상되는 위험을 간과하고 참여한 선택관광으로 인해 발생한 안전사고는 당사에 책임범위가 아님을 알려드립니다.      
      - 자유일정시 안전사고에 유의하시길 바랍니다.
    `,
    },
  ],
  Europe: [
    {
      title: '여행 시 유의 사항',
      content: `
        ★여행문화에 대하여 
        - 미주지역(미국/캐나다/중남미 등)은 제공받는 서비스에 따라 그에 응당한 팁을 주는 [팁문화]가 관습입니다. 내가 묵었던 호텔방을 정리해주는 룸메이드에게, 내 짐을 대신 들어주는 포터에게, 식당에서 서빙해주는 서버에게 [서비스에 대한 응담으로 소정의 팁을 제공해 주신다면 더 나은 서비스를 받으실 수 있습니다.]
      `,
    },

    {
      title: '●입국신고서 및 세관신고서',
      content: `
        - 전자여권+ESTA(전자입국허가서)를 받아 입국하시는 모든 분들은 전자적으로 확인이 가능하므로 기내에서 입국신고서를 작성하지 않습니다.
        - [전자여권+ESTA] 또는 [전자여권+비자] 로 입국 시 세관신고서는 [가족당 1장]만 작성하시면 됩니다.
        *단, 구여권+비자를 소지하고 입국하실 경우 입국신고서와 세관신고서를 작성하셔야합니다.
        - 비자, 여권의 영문명이 다른 경우 미국 입국이 거절되므로 예약 시 여권과 비자 사본을 제출하시고 영문명을 필히 확인하시기 바랍니다.
        - 구여권에 비자가 있는 경우 구여권과 신여권을 모두 지참하여 출국하셔야합니다.
        - 미국입국 시 불투명한 병에 들은 화장품을 소지한 경우 마약류검사를 위해 가방을 열어보는 경우가 있으니 여행용 투명한 공병에 화장품을 덜어가시길 권합니다.`,
    },
    {
      title: '●행사관련',
      content: `
        - 미주지역특성상 버스 이동시간이 평균 4~5시간입니다.
        - 대형버스로 행사가 진행되며 통상적으로 40명~56명의 인원이 함께 행사를 진행합니다.
        *단, LA/라스베이거스/샌프란시스코/뉴욕 등 특정 도시에서는 인원별 차량으로 진행되며 관광지에서 대형버스로 합류될 수 있습니다.
        *인원별 차량 : 15명 미만 → 15인승 럭셔리 벤츠 스프린터벤(드라이빙가이드)으로 변경될 수 있음.
        - 동일항공 / 타 항공의 다른 상품 / 출발일이 다른 고객님과 현지에서 합류되어 진행하게 됩니다.
        - 현지 날씨, 시간 및 상황에 따라 일정표상의 관광지는 차창관광으로 대체될 수 있으며 현지 행사사정 상 일정이 변동될 수 있습니다. 확정일정은 출발 이틀전에 확인하실 수 있습니다.
        - 옵션 진행 시 신청 후 취소가 불가하거나 패널티가 발생될 수 있습니다. (라스베이거스 쇼 티켓 같은 경우 노쇼패널티가 발생됩니다.)
      `,
    },
    {
      title: '●호텔관련',
      content: `
        - 라스베이거스 및 라플린 지역은 [카지노 호텔]로 [미성년자 신분확인절차]가 까다롭습니다. 만 21세 미만 2인 이상은 투숙이 불가하며 일행 중 만 21세 이상(보호자)가 동반해야 투숙할 수 있습니다. 또한, 호텔 내 부대시설을 이용할 때에도 보호자 동반이 필수이며 id카드(여권)를 지참하시길 바랍니다.
        - 미주지역의 호텔은 트윈베드(침대2개) 또는 킹베드(침대1개)로 배정될 수 있으며, 소방안전법에 따라 객실내에 비치 되어있는 침대 외에 엑스트라 침대 추가가 불가합니다.
        - *3인 1실 이용 시 트윈베드(침대2개)방에 3명이 이용하시거나, 한 분이 싱글 객실 사용료를 내시고 2방을 사용하셔야합니다.
        - 모든 호텔에는 일회용품(치약/칫솔/슬리퍼 등)이 거의 비치되어 있지 않습니다. 미주지역의 표준전압은 110V이므로 변압기를 준비하셔야합니다.
        - 모든 호텔은 금연으로 실내 흡연시 벌금이 부과됩니다. (약 $300 이상)
      `,
    },
  ],
  Asia: [],
  Africa: [],
  'North Pacific Ocean': [],
  'North America': [],
};
