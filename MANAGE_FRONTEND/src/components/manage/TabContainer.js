import React from 'react';

const TabContainer = ({ state }) => {
  if (state === 1) {
    return <div>1입니다.</div>;
  } else {
    return <div>2입니다.</div>;
  }
};

export default TabContainer;
