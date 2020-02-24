import React from 'react';
import AdItems from '../components/main/AdItems';
import MainPoster from '../components/main/MainPoster';
import BottomPoster from '../components/main/BottomPoster';

const MainPage = () => {
  return (
    <>
      <MainPoster />
      <AdItems />
      <BottomPoster />
    </>
  );
};

export default MainPage;
