import client from './client';

export const getQrDetail = ({ id }) =>
  client.get(`http://i02c110.p.ssafy.io:8887/api/detail/${id}`);

export const increaseQrView = ({ id }) =>
  client.get(`http://i02c110.p.ssafy.io:8887/api/clickqr/${id}`);
