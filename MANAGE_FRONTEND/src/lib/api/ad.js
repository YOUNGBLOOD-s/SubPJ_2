import client from './client';

// 광고 목록 가져오기
export const userAdList = ({ token, page }) =>
  client.get(
    `https://i02c110.p.ssafy.io:8887/api/man/nation/list?page=${page}`,
    {
      headers: { Authorization: token },
    },
  );

export const removeList = ({ token, id }) =>
  client.delete(`https://i02c110.p.ssafy.io:8887/api/man/nation/delete/${id}`, {
    headers: { Authorization: token },
  });

export const allAdList = ({ page, continent, sort }) =>
  client.get(
    `https://i02c110.p.ssafy.io:8887/api/all?page=${page}&continents=${continent}&sort=${sort}`,
  );
