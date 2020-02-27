import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../../common/Loading';
import styled from 'styled-components';
import { updateManagerInfo } from '../../../../modules/manager';
import StyledTextField from '../../../common/StyledTextField';
import MenuItem from '@material-ui/core/MenuItem';
import palette from '../../../../lib/styles/palette';

const BroadCastControlWrapper = styled.div`
  width: 100%;
  border: 1px solid ${palette.grey[300]};
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const BroadCastControl = () => {
  const { broadcastNumber, loading } = useSelector(({ manager, loading }) => ({
    broadcastNumber: manager.broadcastNumber,
    loading: loading['manager/GET_MANAGER_INFO'],
  }));
  const [broadcastAdNumber, setBroadcastAdNumber] = useState(5);

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const onManage = () => {
    dispatch(updateManagerInfo({ token, broadcastAdNumber }));
  };

  const onChange = e => {
    const value = e.target.value;
    setBroadcastAdNumber(value);
  };

  return (
    <BroadCastControlWrapper>
      이거안되는거같은뎅
      {!loading && broadcastNumber ? (
        <>
          <div>현재 송출 갯수 : {broadcastNumber}</div>
          <div>조절 갯수 : {broadcastAdNumber}</div>
          <StyledTextField
            id="AdNumber"
            label="송출갯수"
            variant="outlined"
            type="number"
            name="broadcastAdNumber"
            select
            fullWidth
            value={broadcastAdNumber}
            onChange={onChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </StyledTextField>
          <button onClick={onManage}>조절</button>
        </>
      ) : (
        <Loading>현재 송출 갯수 가져오는중</Loading>
      )}
    </BroadCastControlWrapper>
  );
};

export default BroadCastControl;
