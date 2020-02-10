import React, { useEffect } from 'react';
import ImageUploader from '../../../common/ImageUploader';
import { useSelector, useDispatch } from 'react-redux';
import { selectImageUrl, selectImageNation } from '../../../../modules/product';
import styled from 'styled-components';
import MaterialCard from '../../../common/MaterialCard';
import component from '../../../../lib/material/component';
import { prevStep, nextStep } from '../../../../modules/stepper';

const ImageForm = ({ type }) => {
  const { imageUrl } = useSelector(({ product }) => ({
    imageUrl: product.images[type - 1].url,
  }));
  const dispatch = useDispatch();

  const setImageUrl = url => {
    dispatch(selectImageUrl({ type, url }));
  };

  return (
    <ImageUploader
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      inputId={`image-add-${type}`}
    />
  );
};

const FormWrapper = styled.div``;
const Dsecription = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ImageAddForm = ({ classes, steps, step }) => {
  const { nationId } = useSelector(({ product }) => ({
    nationId: product.nationId,
    images: product.images,
  }));
  // 마운트시 각 이미지의 nationId 설정
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectImageNation(nationId));
  }, [dispatch, nationId]);

  // type : 정도 (1-밝고 더움, 2-밝고 추움, 3-어둡고 더움, 4-어둡고 추움)
  const types = [
    {
      type: 1,
      description: '밝고 더운 이미지',
    },
    {
      type: 2,
      description: '밝고 추운 이미지',
    },
    {
      type: 3,
      description: '어둡고 더운 이미지',
    },
    {
      type: 4,
      description: '어둡고 추운 이미지',
    },
  ];

  const handleBack = () => {
    dispatch(prevStep());
  };
  const handleNext = () => {
    dispatch(nextStep());
  };
  return (
    <FormWrapper>
      <div>
        {types.map((type, idx) => (
          <MaterialCard key={type.type}>
            <Dsecription>
              {idx + 1}. {type.description}
            </Dsecription>
            <ImageForm type={type.type} />
          </MaterialCard>
        ))}
      </div>
      {/* TODO: 만약 요청에 실패한다면 에러 메세지를 띄울것 */}
      <component.Button
        disabled={step === 0}
        onClick={handleBack}
        className={classes.button}
      >
        이전단계로
      </component.Button>
      <component.Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
      >
        {step === steps.length - 1 ? '완료' : '다음'}
      </component.Button>
    </FormWrapper>
  );
};

export default ImageAddForm;
