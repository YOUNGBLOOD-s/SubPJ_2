import React, { useEffect } from 'react';
import component from '../../lib/material/component';
import { useState } from 'react';
import styled from 'styled-components';
import StyledTextField from '../common/StyledTextField';
import { useDispatch } from 'react-redux';
import { addMonthtable, updateProductMonthtable } from '../../modules/product';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const MonthForm = ({ nationId, update, data, setUpdating }) => {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({
    hum1: 0,
    hum2: 0,
    hum3: 0,
    hum4: 0,
    hum5: 0,
    hum6: 0,
    hum7: 0,
    hum8: 0,
    hum9: 0,
    hum10: 0,
    hum11: 0,
    hum12: 0,
    tem1: 0,
    tem2: 0,
    tem3: 0,
    tem4: 0,
    tem5: 0,
    tem6: 0,
    tem7: 0,
    tem8: 0,
    tem9: 0,
    tem10: 0,
    tem11: 0,
    tem12: 0,
    nation: nationId, // 연결된 nation id
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (update) {
      setForm(data);
      setAdding(true);
    }
  }, []);

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const onAddMonthTable = () => {
    dispatch(addMonthtable({ token, form }));
  };
  const onUpdateTable = () => {
    dispatch(updateProductMonthtable({ id: nationId, form, token }));
    setUpdating(false);
  };

  const monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      {adding ? (
        <StyledForm>
          <div>
            <h4>해당 여행 상품의 온도 (℃)</h4>
            <component.Grid container spacing={1}>
              {monthes.map(month => (
                <component.Grid item xs={3} sm={2} md={1} key={month.idx}>
                  <StyledTextField
                    label={`${month}월`}
                    variant="filled"
                    type="Number"
                    name={`tem${month}`}
                    value={form[`tem${month}`]}
                    onChange={handleChange}
                  />
                </component.Grid>
              ))}
            </component.Grid>
          </div>
          <h4>해당 여행 상품의 월별 습도 (%) </h4>
          <component.Grid container spacing={1}>
            {monthes.map(month => (
              <component.Grid item xs={3} sm={2} md={1} key={month.idx}>
                <StyledTextField
                  label={`${month}월`}
                  variant="filled"
                  type="Number"
                  name={`hum${month}`}
                  value={form[`hum${month}`]}
                  onChange={handleChange}
                />
              </component.Grid>
            ))}
          </component.Grid>
          <component.Grid item xs={12}>
            {update ? (
              <component.Button
                variant="contained"
                color="primary"
                onClick={onUpdateTable}
              >
                온/습도 테이블 업데이트
              </component.Button>
            ) : (
              <component.Button
                variant="contained"
                color="primary"
                onClick={onAddMonthTable}
              >
                온/습도 테이블 생성
              </component.Button>
            )}
          </component.Grid>
        </StyledForm>
      ) : (
        <component.Grid container spacing={1}>
          <component.Grid item xs={12}>
            <component.Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => setAdding(true)}
            >
              온/습도 테이블 추가
            </component.Button>
          </component.Grid>
        </component.Grid>
      )}
    </div>
  );
};

export default MonthForm;
