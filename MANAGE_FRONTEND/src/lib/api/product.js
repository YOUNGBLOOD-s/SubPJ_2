import client from './client';

export const productInfo = ({ id, token }) =>
  client.get(`/api/man/nation/${id}`, {
    headers: { Authorization: token },
  });

export const updateNation = ({ id, form, token }) =>
  client.put(`/api/man/nation/update/${id}`, form, {
    headers: { Authorization: token },
  });

export const updateImage = ({ id, form, token }) =>
  client.put(`/api/man/image/update/${id}`, form, {
    headers: { Authorization: token },
  });
