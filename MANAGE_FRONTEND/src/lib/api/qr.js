import client from './client';

export const getQrDetail = ({ id }) =>
  client.get(`https://i02c110.p.ssafy.io:8887/api/ad/detail/${id}`);

export const increaseQrView = ({ id }) =>
  client.get(`https://i02c110.p.ssafy.io:8887/api/ad/clickqr/${id}`);
