import React from 'react';
import MonthTable from './MonthTable';

const Month = ({ month }) => {
  return (
    <div>
      <MonthTable datas={month} />
    </div>
  );
};

export default Month;
