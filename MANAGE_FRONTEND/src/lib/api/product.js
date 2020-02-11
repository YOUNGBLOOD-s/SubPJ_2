import client from './client';

export const productInfo = ({ id, token }) =>
  client.get(`/api/man/nation/${id}`, {
    headers: { Authorization: token },
  });
