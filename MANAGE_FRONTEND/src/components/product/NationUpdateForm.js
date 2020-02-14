import React, { useState } from 'react';
import component from '../../lib/material/component';
import MenuItem from '@material-ui/core/MenuItem';
import StyledTextField from '../common/StyledTextField';
import continentsArray from '../../lib/data/continentsArray';
import DatePicker from '../common/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductNation } from '../../modules/product';
import reformDate from '../../lib/utill/reformDate';
import LoadingBackdrop from '../common/LoadingBackdrop';

const NationUpdateForm = ({ nation, setUpdating }) => {
  const [form, setForm] = useState({
    continents: nation.continents,
    dust: nation.dust,
    en_name: nation.en_name,
    f_date: nation.f_date,
    ko_name: nation.ko_name,
    price: nation.price,
    s_date: nation.s_date,
    speech: nation.speech,
  });

  const { loading, error } = useSelector(({ product, loading }) => ({
    loading: loading['product/UPDATE_PRODUCT_NATION'],
    error: product.updateErrors['nation'],
  }));

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
      s_date: reformDate(date),
    });
  };

  const handleFdateChange = date => {
    setForm({
      ...form,
      f_date: reformDate(date),
    });
  };

  const token = sessionStorage.getItem('access_token');
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(updateProductNation({ id: nation.idx, form, token }));
    if (error) return;
    setUpdating(false);
  };

  return (
    <form>
      {/* 로딩시 백드랍 로딩 */}
      {loading && <LoadingBackdrop loading={loading} />}

      <component.Grid container spacing={1}>
        <component.Grid item xs={6}>
          <DatePicker
            value={form.s_date}
            onChange={handleSdateChange}
            label={'출발 날짜 설정'}
          />
        </component.Grid>
        <component.Grid item xs={6}>
          <DatePicker
            value={form.f_date}
            onChange={handleFdateChange}
            label={'도착 날짜 설정'}
          />
        </component.Grid>
        <component.Grid item xs={4}>
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
        <component.Grid item xs={4}>
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
        <component.Grid item xs={4}>
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
        <component.Grid item xs={12}>
          <StyledTextField
            label="TTS / 안내 문구"
            variant="outlined"
            onChange={onChange}
            value={form.speech}
            name="speech"
            autoComplete="speech"
            fullWidth
            multiline
          />
        </component.Grid>
        <component.Grid item xs={8}>
          <StyledTextField
            label="가격"
            variant="outlined"
            onChange={onChange}
            value={form.price}
            name="price"
            autoComplete="price"
            fullWidth
          />
        </component.Grid>
        <component.Grid item xs={4}>
          <StyledTextField
            label="미세먼지 수치"
            variant="outlined"
            onChange={onChange}
            value={form.dust}
            name="dust"
            autoComplete="dust"
            fullWidth
          />
        </component.Grid>

        {/* 에러시 경고창 */}
        {error && (
          <component.Grid item xs={12}>
            {error}
          </component.Grid>
        )}
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
    </form>
  );
};

export default NationUpdateForm;
