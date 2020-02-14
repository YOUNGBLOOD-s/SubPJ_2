import client from './client';

// 광고 목록 가져오기
export const adlist = token =>
  client.get('/api/man/nation/list?page=3', {
    headers: { Authorization: token },
  });

export const removeList = ({ token, id }) =>
  client.delete(`/api/man/nation/delete/${id}`, {
    headers: { Authorization: token },
  });
