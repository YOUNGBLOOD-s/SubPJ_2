import React from 'react';
import MonthTable from './MontTable';

const Month = ({ month }) => {
  return (
    <div>
      <MonthTable datas={month} />
    </div>
  );
};

export default Month;
