import React, { useEffect } from 'react';
import ImageUploader from '../../../common/ImageUploader';
import { useSelector, useDispatch } from 'react-redux'
import { selectImageUrl, selectImageNation } from '../../../../modules/product';

const ImageForm = ({ type }) => {
  const { imageUrl } = useSelector(({ product }) => ({
    imageUrl: product.images[type - 1].url
  }))
  const dispatch = useDispatch()

  const setImageUrl = url => {
    dispatch(selectImageUrl({ type, url }))
  };

  return <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />;
};

const ImageAddForm = () => {
  const { nationId } = useSelector(({ product }) => ({
    nationId: product.nationId
  }))
  // 마운트시 각 이미지의 nationId 설정
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(selectImageNation(nationId))
  }, [dispatch, nationId])

  // type : 정도 (1-밝고 더움, 2-밝고 추움, 3-어둡고 더움, 4-어둡고 추움) 
  const types = [{
    type: 1,
    description: '밝고 더운 이미지'
  }, {
    type: 2,
    description: '밝고 추운 이미지'
  }, {
    type: 3,
    description: '어둡고 더운 이미지'
  }, {
    type: 4,
    description: '어둡고 추운 이미지'
  }]


  return (

    <div>{types.map(type => (
      <div key={type.type}>
        <h5>{type.description}</h5>
        <ImageForm type={type.type} />
      </div>
    ))}</div>
  );
};

export default ImageAddForm;
