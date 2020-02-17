import React, { useEffect, useState } from 'react';
import ImageUploader from '../../../common/ImageUploader';
import { useSelector, useDispatch } from 'react-redux';
import { selectImageUrl, selectImageNation } from '../../../../modules/form';
import styled from 'styled-components';
import MaterialCard from '../../../common/MaterialCard';
import component from '../../../../lib/material/component';
import { prevStep, nextStep } from '../../../../modules/stepper';
import palette from '../../../../lib/styles/palette';
import AlertDialog from '../../../common/AlertDialog';

const ImageForm = ({ type }) => {
  const { imageUrl } = useSelector(({ form }) => ({
    imageUrl: form.images[type - 1].url,
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
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  border: 1px solid ${palette.red[300]};
  padding: 1rem;
  border-radius: 3px;
  text-align: center;
  color: ${palette.red[600]};
`;

const ImageAddForm = ({ classes, steps, step }) => {
  const { nationId, images } = useSelector(({ form }) => ({
    nationId: form.nationId,
    images: form.images,
  }));

  const [error, setError] = useState(false);

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
    for (let image of images) {
      if (image.url === '') {
        setError(true);
        return;
      }
    }
    setError(false);
    dispatch(nextStep());
  };
  return (
    <FormWrapper>
      <component.Grid container spacing={1}>
        <AlertDialog
          open={error}
          setOpen={setError}
          title={'이미지 업로드'}
          text={'모든 이미지를 업로드해주세요'}
        />
        {types.map(type => (
          <component.Grid item xs={12} sm={6} key={type.type}>
            <MaterialCard>
              <Dsecription>{type.description}</Dsecription>
              <ImageForm type={type.type} />
            </MaterialCard>
          </component.Grid>
        ))}
      </component.Grid>

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
