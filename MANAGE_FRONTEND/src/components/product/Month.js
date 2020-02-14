import React from 'react';
import MonthTable from './MonthTable';
import { useState } from 'react';
import MonthForm from './MonthForm';
import component from '../../lib/material/component';

const Month = ({ month }) => {
  const { idx: id } = month;
  const [updating, setUpdating] = useState(false);
  return (
    <component.Grid container spacing={1}>
      {updating ? (
        <MonthForm
          nationId={id}
          data={month}
          setUpdating={setUpdating}
          update
        />
      ) : (
        <>
          <component.Grid item xs={12}>
            <MonthTable datas={month} />
          </component.Grid>
          <component.Grid item xs={12}>
            <component.Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => setUpdating(true)}
            >
              수정
            </component.Button>
          </component.Grid>
        </>
      )}
    </component.Grid>
  );
};

export default Month;
