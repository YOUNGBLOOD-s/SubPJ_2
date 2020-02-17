import client from './client';

export const addRoutes = ({ token, routes }) =>
  client.post('https://i02c110.p.ssafy.io:8887/api/man/contents/add', routes, {
    headers: {
      Authorization: token,
    },
  });

export const addImages = ({ token, images }) =>
  client.post('https://i02c110.p.ssafy.io:8887/api/man/image/insert', images, {
    headers: {
      Authorization: token,
    },
  });
