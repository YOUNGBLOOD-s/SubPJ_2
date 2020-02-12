import React, { useState } from 'react';
import component from '../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import StyledTextField from '../common/StyledTextField';
import continentsArray from '../../lib/data/continentsArray';
import DatePicker from '../common/DatePicker';

const NationUpdateForm = ({ nation }) => {
  const [form, setForm] = useState({
    en_name: nation.en_name,
    ko_name: nation.ko_name,
    continents: nation.continents,
    speech: nation.speech,
    price: nation.price,
    s_date: nation.s_date,
    f_date: nation.f_date,
    dust: nation.dust,
    weight: nation.weight,
    showcnt: nation.showcnt,
  });

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSdateChange = date => {
    setForm({
      ...form,
      s_date: date,
    });
  };

  const handleFdateChange = date => {
    setForm({
      ...form,
      f_date: date,
    });
  };

  return (
    <form>
      <component.Grid container spacing={1}>
        <component.Grid item xs={6}>
          <StyledTextField
            label="영문이름"
            variant="outlined"
            onChange={onChange}
            value={form.en_name}
            name="en_name"
            autoComplete="en_name"
            fullWidth
          />
        </component.Grid>
        <component.Grid item xs={6}>
          <StyledTextField
            label="한글이름"
            variant="outlined"
            onChange={onChange}
            value={form.ko_name}
            name="ko_name"
            autoComplete="ko_name"
            fullWidth
          />
        </component.Grid>
        <component.Grid item xs={6}>
          <StyledTextField
            variant="outlined"
            select
            fullWidth
            label="대륙"
            type="text"
            name="continents"
            value={form.continents}
            onChange={onChange}
          >
            {continentsArray.map(continent => (
              <MenuItem key={continent.value} value={continent.value}>
                {continent.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </component.Grid>
        <StyledTextField
          label="TTS 문구"
          variant="outlined"
          onChange={onChange}
          value={form.speech}
          name="speech"
          autoComplete="speech"
          fullWidth
        />
        <StyledTextField
          label="가격"
          variant="outlined"
          onChange={onChange}
          value={form.price}
          name="price"
          autoComplete="price"
          fullWidth
        />
        <DatePicker value={form.s_date} onChange={handleSdateChange} />
        <DatePicker value={form.f_date} onChange={handleFdateChange} />
        <StyledTextField
          label="미세먼지"
          variant="outlined"
          onChange={onChange}
          value={form.dust}
          name="dust"
          autoComplete="dust"
          fullWidth
        />
        <StyledTextField
          label="가중치"
          variant="outlined"
          onChange={onChange}
          value={form.weight}
          name="weight"
          autoComplete="weight"
          fullWidth
        />
        <StyledTextField
          label="아이디"
          variant="outlined"
          onChange={onChange}
          value={form.showcnt}
          name="showcnt"
          autoComplete="showcnt"
          fullWidth
        />
      </component.Grid>
    </form>
  );
};

export default NationUpdateForm;
