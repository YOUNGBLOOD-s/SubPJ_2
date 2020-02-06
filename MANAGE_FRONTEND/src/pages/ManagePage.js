import React from 'react';
import ManageContainer from '../components/manage/ManageContainer';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';

const ManagePage = () => {
  return (
    <>
      <ButtonAppbarContainer />
      <ManageContainer />
    </>
  );
};

export default ManagePage;
