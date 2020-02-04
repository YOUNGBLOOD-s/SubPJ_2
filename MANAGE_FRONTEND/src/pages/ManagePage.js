import React from 'react';
import ManageContainer from '../containers/common/ManageContainer';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';

const ManagePage = () => {
  return (
    <div>
      <ButtonAppbarContainer />
      <h1>광고주 직접 관리 페이지</h1>
      <ManageContainer />
    </div>
  );
};

export default ManagePage;
