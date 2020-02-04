import React from 'react';
import styled from 'styled-components';
import TitleBar from './common/TitleBar';
import CaptionText from './common/CaptionText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import palette from '../../lib/styles/palette';

const CautionTextBlock = styled.div`
  padding: 1rem 0.5rem;
`;

const StyledPanel = styled(ExpansionPanel)`
  background-color: white;
`;

const StyledText = styled.span`
  font-weight: bold;
  font-family: 'Nanum Myeongjo', serif;
`;

const DetailContainer = styled.div`
  .item {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
    color: ${palette.grey[600]};
  }
`;

const CautionText = () => {
  return (
    <CautionTextBlock>
      <TitleBar>
        <span role="img" aria-label="emoji">
          🚧
        </span>{' '}
        약관 및 참고사항
      </TitleBar>
      <CaptionText>여행 약관 및 참고사항을 알려드립니다.</CaptionText>
      {cautions.map((caution, idx) => (
        <StyledPanel key={idx}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledText>{caution.title}</StyledText>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DetailContainer>
              {caution.contents.map((content, content_idx) => (
                <div key={content_idx}>
                  <h3>{content.sub_title}</h3>
                  <div>
                    {content.items.map((item, item_idx) => (
                      <div key={item_idx} className="item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </DetailContainer>
          </ExpansionPanelDetails>
        </StyledPanel>
      ))}
    </CautionTextBlock>
  );
};

export default CautionText;

const cautions = [
  {
    title: '여행약관',
    contents: [
      {
        sub_title: '여행취소료 규정',
        items: [
          `▶ 인터넷상에서 예약결제 취소 및 변경은 불가능 하오니, 예약/결제 취소나 여행자정보 변경을 원하시면 반드시 예약담당자에게 연락하여 주시기바랍니다.`,
          `▶ 여행자의 여행계약 해제 요청시 여행약관에 의거하여 취소료가 부과됩니다 ◀`,
          `제15조(여행출발 전 계약해제)`,
          `· 여행개시 30일전까지( ~ 30) 통보 시 - 계약금 환급`,
          `· 여행개시 20일전까지(29  ~20) 통보 시 - 여행요금의 10% 배상`,
          `· 여행개시 10일전까지(19 ~10) 통보 시 - 여행요금의 15% 배상`,
          `· 여행개시 8일전까지(9 ~ 8) 통보 시 - 여행요금의 20% 배상`,
          `· 여행개시 1일전까지(7 ~ 1) 통보 시 - 여행요금의 30% 배상`,
          `· 여행 당일 통보 시 - 여행요금의 50% 배상(※공정거래위원회 고시 제2014-4호 소비자분쟁해결기준에 의한것으로 제15조의 변경사항은 2014년 3월21일 여행상품예약자부터 적용)`,
        ],
      },
      {
        sub_title: '계약금규정',
        items: [
          `· 계약금은 국외여행 표준약관에 의거 하여 예약일 기준 3일 이내에 상품가격의 10%를 결제하셔야 합니다.`,
          `· 계약금 입금이 지연될 경우 예약이 취소될수 있습니다. `,
          `· 계약금은 항공, 호텔, 현지 사정에 따라 금액이 변동 될수 있으며, 상황에 따라 결제시한이 당겨질수도 있습니다.`,
          `· 계약금 결제 이후 취소료 규정 적용 기간에 취소 시 취소 수수료가 계약금 금액 보다 클 시 추가 취소 수수료를 부담하셔야합니다.`,
          `· 취소료 규정 적용 기간에 예약 시 계약금은 취소료 규정 배상 금액 만큼으로 변경 됩니다.`,
          `ex) 여행 개시 8일전 예약 시 : 취소료 부과 금액인 총 상품가격의 20% 를 계약금으로 결제`,
        ],
      },
      {
        sub_title: '최저출발인원 미 충족 시 계약해제',
        items: [
          `· 당사는 최저행사인원이 충족되지 아니하여 여행계약을 해제하는 경우 여행출발 7일전까지 여행자에게 통지하여야 합니다.`,
          `· 당사는 여행참가자 수 미달로 전항의 기일내 통지를 하지 아니하고 계약을 해제하는 경우 이미 지급 받은 계약금 환급 외에 다음 각 목의 금액을 여행자에게 배상하여야 합니다.`,
          `· 여행개시 7일전까지 여행계약 해제 통지시 : 계약금 환급`,
          `· 여행출발 1일전까지 통지시 : 여행요금의 30%`,
          `· 여행출발 당일 통지시 : 여행요금의 50%`,
        ],
      },
    ],
  },
  {
    title: '예약관련 유의사항',
    contents: [
      {
        sub_title: '상품 이용 관련',
        items: [
          `· 반드시 신청전/출발전에 상품 일정표 및 목적지의 여행 정보를 확인하시기 바랍니다.`,
          `· 본 상품은 단체여행을 목적으로 하는 패키지 상품으로 여행자는 여행업자의 여행질서 유지에 적극 협조하여 주셔야 하며 정해진 일정에서 벗어나는 개별일정의 진행은 불가합니다. 단체여행 일정이 아닌 개별 일정을 진행하실 수 있는 개별여행을 원하시는 분은 [자유여행] 상품을 이용해 주시기 바랍니다.`,
        ],
      },
      {
        sub_title: '건강 정보',
        items: [
          `여행 전, 해외여행 질병정보센터 홈페이지 www.cdc.go.kr 에서 여행 목적지에서 유행 중이거나 주의해야 할 질병정보를 확인하시기 바랍니다.`,
        ],
      },
      {
        sub_title: '해외 안전 여행 정복',
        items: [
          `외교통상부 해외안전여행 홈페이지 www.0404.go.kr 에서 국가나 지역별 위험수준, 안전대책, 행동지침에 대한 정보를 제공합니다.`,
        ],
      },
      {
        sub_title: '법정대리인(부모) 동행 없는 미성년자의 여행계약 주의사항',
        items: [
          `· 20세 미만의 보호자를 동반하지 않은 여행객은 친권자의 동의서가 필요합니다.`,
          `· 만 19세 미만의 미성년자끼리의 여행계약 또는 법정대리인(부모)이 아닌 성인과 동행하는 미성년자의 여행계약은 민법 제5조에 의거하여 법정대리인인 부모 또는 친권자와 체결함을 원칙으로 해야 하고, 당사는 법정대리인의 동의 없는 여행계약의 체결을 거부할 수 있습니다.`,
        ],
      },
      {
        sub_title: '유류 할증료',
        items: [
          `☞ 국제유가와 항공사 영업환경을 고려한 국토교통부의 ‘국제선 항공요금과 유류할증료 확대방안’ 에따라 추가인상 또는 인하 된 유류할증료 금액을 상품가에 반영할수 있습니다.`,
          `☞ 달러/엔/유로화 등의 환율이 급격하게 변동될 경우는 추가금액이 발생하거나 상품가 인상이 있을 수 있습니다.`,
        ],
      },
    ],
  },
  {
    title: '여권/비자 관련정보',
    contents: [
      {
        sub_title: '여권 / 비자',
        items: [
          `· 2008년 비자 면제 프로그램(VWP)이후 비자없이 전자여권을 통해 미국에 입국하실 수 있으며, 2010년 09월 08일 이후 부터는 ESTA승인 비용 $14이 비용이 발생합니다.(불포함-개인지불) 단, 사전에 반드시 전자여권을 발급받으셔야 하며, 출발 72시간 전에 미국 입국 허가 시스템(ESTA)에 접속하여 사전 입국 승인을 받으셔야 합니다.`,
          `· 여권은 출발일로 부터 반드시 6개월 이상 유효기간이 남아 있어야만 합니다.`,
          `· 미국비자를 소지하신 분중에는 반드시 B1/B2 관광비자를 가지신 분만 예약을 하실 수 있으며, 기타 학생비자이나 관용비자등으로는 입국하실 수 없음을 알려드립니다.`,
          `· 비자면제프로그램(VWP) 이용절차 : 전자여권 발급 → 전자 여행 허가제 ESTA 사이트 접속 (https://esta.cbp.dhs.gov) → 신상정보·여행계획 입력 후 허가신청→ 신청번호 확인→ 입국허가 통지 확인 → 출국`,
          `· 비자 발급 거절 및 입국 거절 경력자, 전자여권을 소지하지 않으신 분들은 비자 면제 프로그램에 해당되지 않습니다.`,
          `· ESTA를 통하여 사전 입국승인을 받아 미국에 입국하시는 경우라 해도 입국 심사시에 출입국심사관의 고유판단에 따라 입국이 거절되실 수도 있음을 알려드립니다.`,
          `· ESTA승인을 통해 미국입국을 하시고, 주변국가(캐나다등)를 육로로 이동을 하실경우 별도 비용이 부과 됩니다.`,
        ],
      },
      {
        sub_title: '외국 / 이중국적자 주의사항',
        items: [
          `외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 여행자본인이 해당국의 대사관에 확인하셔야 합니다.`,
        ],
      },
    ],
  },
  {
    title: '공항 및 여행 시 주의사항',
    contents: [
      {
        sub_title: '공항이용',
        items: [
          `· 국토교통부 액체,젤류,에어로졸에 대한 항공보안 통제지침에 따라 대한민국을 출발하는 모든 국제선 항공편과 환승·통과편을 이용하는 승객들이 용기 1개당 100 ㎖(cc) 를 초과하는 액체, 젤류 및 에어로졸류 물질을 휴대하여 항공기에 탑승하는 것을 금지합니다.`,
          `· 면세점에서 액체, 젤류 및 에어로졸 면세품을 사는 경우, 면세점의 포장 봉투를 뜯지만 않으시면 용량에 관계없이 기내에 가지고 탈 수 있으므로, 최종 목적지 도착시까지 절대 포장을 뜯지 마십시오.`,
          `· 국토교통부 http://www.molit.go.kr (1599-0001) 참조 / 단, EU국가에서 갈아타시는 경우, EU 이외의 국가(인천공항 포함)에 위치한 공항 또는 시내 면세점에서 구입한 모든 액체류는 환승시 해당 국가 규정에 따라 압수될 수 있습니다.`,
        ],
      },
      {
        sub_title: '동물 / 축산물 / 식물검역 안내',
        items: [
          `· 대부분의 축산물(소세지, 육포 등) 및 생과실, 열매채소 등은 휴대 반입할 수 없고, 휴대반입이 가능한 축산물과 식물류를 반입하는 여행객도 농림축산검역본부에 신고하여 검역을 받아야 하며, 불법 반입하는 경우에는 500만원 이하의 과태료가 부과됩니다.`,
          `· 해외 축산농장 또는 가축시장을 방문한 여행객과 가축전염병 발생 국가를 방문한 축산 관계자는 농림축산검역본부에 신고하여 소독을 받아야 합니다.`,
        ],
      },
    ],
  },
];
