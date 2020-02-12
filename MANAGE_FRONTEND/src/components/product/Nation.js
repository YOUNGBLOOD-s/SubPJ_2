import React, { useState } from 'react';
import NationUpdateForm from './NationUpdateForm';

const Nation = ({ nation }) => {
  const [update, setUpdate] = useState(true);
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
        {update ? (
          <>
            <button onClick={() => setUpdate(!update)}>DONE</button>
            <NationUpdateForm nation={nation} />
          </>
        ) : (
          <div>
            <button onClick={() => setUpdate(!update)}>update</button>
            <div>ID: {idx}</div>
            <div>영문명 : {en_name}</div>
            <div>한글명 : {ko_name}</div>
            <div>미세먼지 등급 : {dust}</div>
            <div>TTS 문구 : {speech}</div>
            <div>가격 : {price}원</div>
            <div>출발일 : {s_date}</div>
            <div>도착일 : {f_date}</div>
            <div>대륙 : {continents}</div>
            <div>가중치 : {weight}</div>
            <div>전광판에 보여진 광고 노출 횟수: {showcnt}</div>
            <div>
              <h4>알고리즘 산출 정보</h4>
              <div>현재 TYPE : {type}</div>
              <div>현재 FLAG : {flag}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nation;
