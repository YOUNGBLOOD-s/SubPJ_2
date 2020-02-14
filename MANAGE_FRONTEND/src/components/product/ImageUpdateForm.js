import React from 'react';
import ImageUploader from '../common/ImageUploader';
import { useDispatch } from 'react-redux';
import { updateProductImage } from '../../modules/product';
import { useState } from 'react';
import component from '../../lib/material/component';

const ImageUpdateForm = ({ image, setUpdating }) => {
  const { idx: id, type, url, nation } = image;

  const [form, setForm] = useState({
    nation,
    type,
    url,
  });

  const setImageUrl = url => {
    setForm({
      ...form,
      url,
    });
  };

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('access_token');
  const onUpdate = () => {
    dispatch(updateProductImage({ id, form, token }));
    setUpdating(false);
  };

  return (
    <component.Grid container spacing={1}>
      <component.Grid item xs={12}>
        <ImageUploader
          imageUrl={form.url}
          setImageUrl={setImageUrl}
          inputId={`image-${type}`}
        />
      </component.Grid>
      <component.Grid item xs={6}>
        <component.Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={onUpdate}
        >
          업데이트 완료
        </component.Button>
      </component.Grid>
      <component.Grid item xs={6}>
        <component.Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => setUpdating(false)}
        >
          취소
        </component.Button>
      </component.Grid>
    </component.Grid>
  );
};

export default ImageUpdateForm;
