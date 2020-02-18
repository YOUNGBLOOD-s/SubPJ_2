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
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
  .text {
    color: ${palette.grey[500]};
    font-weight: bold;
    text-align: center;
    font-size: 1rem;
  }
`;

const OutputWrapper = styled.div`
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
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
            <component.Grid item xs={6} sm={3}>
              <InfoBox>
                <div className="text">ID</div>
                <div>{idx}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6} sm={3}>
              <InfoBox>
                <div className="text">한글명</div>
                <div>{ko_name}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6} sm={3}>
              <InfoBox>
                <div className="text">영문명</div>
                <div>{en_name}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6} sm={3}>
              <InfoBox>
                <div className="text">대륙</div>
                <div>{getContinetName(continents)}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">미세먼지</div>
                <div>{dustType(dust)}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">가격</div>
                <div>{Number(price).toLocaleString()}원</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">출발일자</div>
                <div>{s_date}</div>
              </InfoBox>
            </component.Grid>
            <component.Grid item xs={6}>
              <InfoBox>
                <div className="text">도착일자</div>
                <div>{f_date}</div>
              </InfoBox>
            </component.Grid>

            <component.Grid item xs={12}>
              <InfoBox>
                <div className="text">TTS 문구</div>
                <div>{speech}</div>
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
                    <div>{showcnt}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">가중치</div>
                    <div>{weight}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">현재 TYPE</div>
                    <div>{type}</div>
                  </InfoBox>
                </component.Grid>
                <component.Grid item xs={6} sm={3}>
                  <InfoBox>
                    <div className="text">현재 FLAG</div>
                    <div>{flag}</div>
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
