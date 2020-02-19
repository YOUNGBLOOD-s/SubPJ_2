import React from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
import AdItems from '../components/main/AdItems';
import MainPoster from '../components/main/MainPoster';
import BottomPoster from '../components/main/BottomPoster';

const MainPage = () => {
  return (
    <>
      <ButtonAppbarContainer />
      <MainPoster />
      <AdItems />
      <BottomPoster />
    </>
  );
};

export default MainPage;
