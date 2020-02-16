import React, { useEffect } from 'react';
import styled from 'styled-components';
import component from '../../lib/material/component';
import { useState } from 'react';
import CounselDialog from './CounselDialog';
import CounselItem from './CounselItem';

const CounselsBox = styled.div`
  margin-bottom: 1rem;
  .btn-text {
    font-size: 1.5rem;
  }
`;

const Counsels = ({ counsels, user }) => {
  const [completed, setCompleted] = useState(0);
  const [uncompleted, setUnCompleted] = useState(0);

  useEffect(() => {
    const allLength = counsels.length;
    let count = 0;
    counsels.forEach(counsel => {
      if (counsel.completed) {
        count += 1;
      }
    });
    setCompleted(count);
    setUnCompleted(allLength - count);
  }, [counsels]);

  return (
    <CounselsBox>
      <component.Grid container spacing={2}>
        <component.Grid item xs={6}>
          <CounselDialog
            btnComp={
              <div>
                <div className="btn-text">{uncompleted}</div>
                <div>대기중인 상담예약</div>
              </div>
            }
            title="대기중인 상담예약"
            disabled={uncompleted === 0}
            color="secondary"
          >
            {counsels
              .filter(counsel => !counsel.completed)
              .map((counsel, idx) => (
                <CounselItem counsel={counsel} key={idx} />
              ))}
          </CounselDialog>
        </component.Grid>
        <component.Grid item xs={6}>
          <CounselDialog
            btnComp={
              <div>
                <div className="btn-text">{completed}</div>
                <div>완료된 상담예약</div>
              </div>
            }
            disabled={completed === 0}
            title="완료된 상담예약"
            color="primary"
          >
            {counsels
              .filter(counsel => counsel.completed)
              .map((counsel, idx) => (
                <CounselItem counsel={counsel} key={idx} />
              ))}
          </CounselDialog>
        </component.Grid>
      </component.Grid>
    </CounselsBox>
  );
};

export default Counsels;
