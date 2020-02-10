import client from './client';

// 광고 목록 가져오기
export const adlist = token =>
  client.get('/api/man/nation/list', { headers: { Authorization: token } });

export const remove_list = ({ token, idx }) =>
  client.delete(`/api/man/nation/delete/${idx}`, {
    headers: { Authorization: token },
  });
