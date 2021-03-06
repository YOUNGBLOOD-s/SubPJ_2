import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import component from '../../lib/material/component';
import { useDispatch } from 'react-redux';
import { toggleProductCounsel } from '../../modules/product';

const CounselItemWrapper = styled.div`
  max-width: 600px;
  border: 1px solid ${palette.grey[200]};
  border-radius: 3px;
  padding: 1rem;
  margin-bottom: 1rem;
  .title {
    font-weight: bold;
  }
`;

const CounselItem = ({ counsel }) => {
  const { idx, age, name, email, tel, date, text, completed } = counsel;
  const reformDate = new Date(date);
  const day = reformDate.getDate();
  const month = reformDate.getMonth() + 1;
  const year = reformDate.getFullYear();

  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(
      toggleProductCounsel({
        id: idx,
      }),
    );
  };
  return (
    <CounselItemWrapper>
      <component.Grid container>
        <component.Grid item xs={12} sm={2}>
          <span className="title">상담신청일</span>
        </component.Grid>
        <component.Grid item xs={12} sm={10}>
          <div>
            {year}년 {month}월 {day}일
          </div>
        </component.Grid>
        <component.Grid item xs={12} sm={2}>
          <span className="title">성명(연령)</span>
        </component.Grid>
        <component.Grid item xs={12} sm={10}>
          <div>
            {name} ({age})
          </div>
        </component.Grid>
        <component.Grid item xs={12} sm={2}>
          <span className="title">이메일</span>
        </component.Grid>
        <component.Grid item xs={12} sm={10}>
          <div>{email}</div>
        </component.Grid>
        <component.Grid item xs={12} sm={2}>
          <span className="title">연락처</span>
        </component.Grid>
        <component.Grid item xs={12} sm={10}>
          <div>{tel}</div>
        </component.Grid>
        <component.Grid item xs={12} sm={12}>
          <span className="title">상담내용</span>
          <p>{text}</p>
        </component.Grid>
        <component.Grid item xs={12} sm={12}>
          <div style={{ textAlign: 'end' }}>
            <component.Button
              // fullWidth
              size="small"
              color="primary"
              variant="outlined"
              onClick={onToggle}
            >
              {completed ? '완료 취소' : '완료 하기'}
            </component.Button>
          </div>
        </component.Grid>
      </component.Grid>
    </CounselItemWrapper>
  );
};

export default CounselItem;
