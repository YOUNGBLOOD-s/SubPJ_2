import client from './client';

// 광고 목록 가져오기
export const userAdList = ({ token, page }) =>
  client.get(`/api/man/nation/list?page=${page}`, {
    headers: { Authorization: token },
  });

export const removeList = ({ token, id }) =>
  client.delete(`/api/man/nation/delete/${id}`, {
    headers: { Authorization: token },
  });

export const allAdList = ({ page, continent, sort }) =>
  client.get(`/api/all?page=${page}&continents=${continent}&sort=${sort}`);
