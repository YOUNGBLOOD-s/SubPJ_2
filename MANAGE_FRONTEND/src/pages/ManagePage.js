import React from 'react';
import ManageContainer from '../components/manage/ManageContainer';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';

const ManagePage = () => {
  return (
    <div>
      <ButtonAppbarContainer />
      <ManageContainer />
    </div>
  );
};

export default ManagePage;
