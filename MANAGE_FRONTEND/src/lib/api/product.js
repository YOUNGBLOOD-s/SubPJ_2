import client from './client';

export const productInfo = ({ id, token }) =>
  client.get(`https://i02c110.p.ssafy.io:8887/api/man/nation/${id}`, {
    headers: { Authorization: token },
  });

export const updateNation = ({ id, form, token }) =>
  client.put(
    `https://i02c110.p.ssafy.io:8887/api/man/nation/update/${id}`,
    form,
    {
      headers: { Authorization: token },
    },
  );

export const updateImage = ({ id, form, token }) =>
  client.put(
    `https://i02c110.p.ssafy.io:8887/api/man/image/update/${id}`,
    form,
    {
      headers: { Authorization: token },
    },
  );

export const updateContent = ({ id, form, token }) =>
  client.put(
    `https://i02c110.p.ssafy.io:8887/api/man/contents/update/${id}`,
    form,
    {
      headers: { Authorization: token },
    },
  );

export const addMonthtable = ({ form, token }) =>
  client.post('https://i02c110.p.ssafy.io:8887/api/man/monthtb/insert', form, {
    headers: { Authorization: token },
  });

export const updateMonthtable = ({ id, form, token }) =>
  client.put(
    `https://i02c110.p.ssafy.io:8887/api/man/monthtb/update/${id}`,
    form,
    {
      headers: { Authorization: token },
    },
  );

export const toggleCounsel = ({ id }) =>
  client.put(`https://i02c110.p.ssafy.io:8887/api/counsel/completed/${id}`);
