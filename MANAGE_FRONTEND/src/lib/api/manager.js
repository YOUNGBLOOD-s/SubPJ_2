import client from './client';

export const getManagerInfo = token =>
  client.get('https://i02c110.p.ssafy.io:8887/api/man/manager/info', {
    headers: {
      Authorization: token,
    },
  });

export const updateManagerInfo = ({ token, broadcastAdNumber }) =>
  client.put(
    `https://i02c110.p.ssafy.io:8887/api/man/manager/reco/update/${broadcastAdNumber}`,
    {
      headers: {
        Authorization: token,
      },
    },
  );
