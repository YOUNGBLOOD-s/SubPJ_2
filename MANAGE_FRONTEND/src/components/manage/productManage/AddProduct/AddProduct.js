import React from 'react';
import NationAddForm from './NationAddForm';
import ImageAddForm from './ImageAddForm';
import ContentsAddForm from './ContentsAddForm';
import WeatherAddForm from './WeatherAddForm';

const AddProduct = () => {
  return (
    <div>
      <h3>1. 먼저 나라가 추가됩니다</h3>
      <NationAddForm />
      <h3>2. 그다음에 추가된 나라의 인덱스를 연결시킵니다.</h3>
      <ContentsAddForm />
      <WeatherAddForm />
      <ImageAddForm />
    </div>
  );
};

export default AddProduct;
