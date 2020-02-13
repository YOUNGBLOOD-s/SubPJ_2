import React, { useState } from 'react';
import component from '../../lib/material/component';
import ImageUploader from '../common/ImageUploader';
import StyledTextField from '../common/StyledTextField';
import transportArr from '../../lib/data/transportArr';
import MenuItem from '@material-ui/core/MenuItem';

const ContentUpdateForm = ({ content, setUpdating }) => {
  const [form, setForm] = useState({
    nation: content.nation,
    day: content.day,
    seq: content.seq,
    title: content.title,
    detail: content.detail,
    image: content.image,
    tofrom: content.tofrom,
    transport: content.transport,
  });

  const setImageUrl = url => {
    setForm({
      ...form,
      url,
    });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onUpdate = () => {
    console.log('업데이트 적용');
  };

  return (
    <component.Grid container spacing={1}>
      <component.Grid item xs={12} sm={6}>
        <ImageUploader
          imageUrl={content.image}
          inputId={`content-${content.day}-${content.seq}`}
          setImageUrl={setImageUrl}
        />
      </component.Grid>
      <component.Grid item xs={12} sm={6}>
        <component.Grid container spacing={1}>
          <component.Grid item xs={6}>
            <StyledTextField
              label="일차"
              variant="outlined"
              type="Number"
              onChange={onChange}
              value={form.day}
              name="day"
              autoComplete="day"
              fullWidth
            />
          </component.Grid>
          <component.Grid item xs={6}>
            <StyledTextField
              label="순서"
              variant="outlined"
              type="Number"
              onChange={onChange}
              value={form.seq}
              name="seq"
              autoComplete="seq"
              fullWidth
            />
          </component.Grid>
          <component.Grid item xs={6}>
            <StyledTextField
              label="행선지"
              variant="outlined"
              onChange={onChange}
              value={form.title}
              name="title"
              autoComplete="title"
              fullWidth
            />
          </component.Grid>
          <component.Grid item xs={6}>
            <StyledTextField
              label="경로"
              variant="outlined"
              onChange={onChange}
              value={form.transport}
              name="transport"
              autoComplete="transport"
              fullWidth
              select
            >
              {transportArr.map(transport => (
                <MenuItem key={transport.value} value={transport.value}>
                  {transport.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </component.Grid>
          <component.Grid item xs={12}>
            <StyledTextField
              label="설명"
              variant="outlined"
              onChange={onChange}
              value={form.detail}
              name="detail"
              autoComplete="detail"
              fullWidth
            />
          </component.Grid>
          <component.Grid item xs={12}>
            <StyledTextField
              label="~에서~까지"
              variant="outlined"
              onChange={onChange}
              value={form.tofrom}
              name="tofrom"
              autoComplete="tofrom"
              fullWidth
            />
          </component.Grid>
        </component.Grid>
      </component.Grid>
      <component.Grid item xs={6}>
        <component.Button
          variant="outlined"
          color="primary"
          onClick={onUpdate}
          fullWidth
        >
          업데이트
        </component.Button>
      </component.Grid>
      <component.Grid item xs={6}>
        <component.Button
          variant="outlined"
          color="secondary"
          onClick={() => setUpdating(false)}
          fullWidth
        >
          취소
        </component.Button>
      </component.Grid>
    </component.Grid>
  );
};

export default ContentUpdateForm;