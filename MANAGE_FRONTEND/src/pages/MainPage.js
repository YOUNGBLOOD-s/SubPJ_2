import React from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import AdItems from '../components/main/AdItems';
import MainPoster from '../components/main/MainPoster';

const MainPage = () => {
  return (
    <>
      <ButtonAppbarContainer />
      <MainPoster />
      <AdItems />
    </>
  );
};

export default MainPage;
