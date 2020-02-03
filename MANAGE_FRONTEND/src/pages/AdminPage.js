import React from 'react';
import { useState } from 'react';
import TabContainer from '../components/manage/TabContainer';

const AdminPage = () => {
  const [state, setState] = useState(1);
  const onCilck = number => {
    setState(number);
  };

  return (
    <div>
      <button onClick={() => onCilck(1)}>탭1</button>
      <button onClick={() => onCilck(2)}>탭2</button>
      <TabContainer state={state} />
    </div>
  );
};

export default AdminPage;
