import React, { useState } from 'react';
import NationUpdateForm from './NationUpdateForm';
import component from '../../lib/material/component';
import { getContinetName } from '../../lib/data/continentsArray';
import { dustType } from '../../lib/data/dustType';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0;
  .text {
    color: ${palette.grey[500]};
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  .info {
    font-size: 1.5rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  /* text-align: center; */
`;

const Nation = ({ nation, user }) => {
  const [updating, setUpdating] = useState(false);
  // 수정가능한 필드
  const {
    idx,
    en_name,
    ko_name,
    continents,
    speech,
    price,
    s_date,
    f_date,
    dust, // 미세먼지 수치 (1-좋음, 2-보통, 3-나쁨, 4-매우나쁨)
    weight, // 가중치
    showcnt, // 광고 카운트
  } = nation;

  // 보여주기만 할 필드
  const { type, flag } = nation;

  return (
    <div>
      <div>
        {updating ? (
          <NationUpdateForm nation={nation} setUpdating={setUpdating} />
        ) : (
          <component.Grid container spacing={1}>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">대륙</div>
                <div className="info">{getContinetName(continents)}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">ID</div>
                <div className="info">{idx}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">한글명</div>
                <div className="info">{ko_name}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">영문명</div>
                <div className="info">{en_name}</div>
              </InfoBox>
            </component.Grid>

            <component.Grid item xs={12}>
              <InfoBox>
                <div className="text">미세먼지</div>
                <div className="info">{dustType(dust)}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={12}>
              <InfoBox>
                <div className="text">가격</div>
                <div className="info">{Number(price).toLocaleString()}원</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">출발일자</div>
                <div className="info">{s_date}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">도착일자</div>
                <div className="info">{f_date}</div>
              </InfoBox>
            </component.Grid>

            <component.Grid item xs={12}>
              <InfoBox>
                <div className="text">TTS 문구</div>
                <div className="info">{speech}</div>
              </InfoBox>
            </component.Grid>
            {/* 어드민만 보이는 부분 */}
            {user && user.username === 'admin' && (
              <>
                <component.Grid item xs={12}>
                  <Title>산출 정보</Title>
                </component.Grid>

                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">광고 노출 횟수</div>
                    <div className="info">{showcnt}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">가중치</div>
                    <div className="info">{weight}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">현재 TYPE</div>
                    <div className="info">{type}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">현재 FLAG</div>
                    <div className="info">{flag}</div>
                  </InfoBox>
                </component.Grid>
              </>
            )}
            {user && user.username === 'admin' && (
              <component.Grid item xs={12}>
                <component.Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setUpdating(true)}
                  fullWidth
                >
                  수정
                </component.Button>
              </component.Grid>
            )}
          </component.Grid>
        )}
      </div>
    </div>
  );
};

export default Nation;
