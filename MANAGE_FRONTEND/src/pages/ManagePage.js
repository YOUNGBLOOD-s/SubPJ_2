import React from 'react';
import { useState } from 'react';
import TabContainer from '../components/manage/TabContainer';
import ContentContainer from '../components/manage/ContentContainer';

const ManagePage = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <TabContainer value={value} setValue={setValue} />

      <ContentContainer value={value} />
    </>
  );
};

export default ManagePage;
