import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('https://i02c110.p.ssafy.io:8887/api/auth/login', {
    username,
    password,
  });

// 회원가입
export const register = ({ username, password, company }) =>
  client.post('https://i02c110.p.ssafy.io:8887/api/auth/register', {
    username,
    password,
    company,
  });

// 로그인 상태 확인
export const check = token =>
  client.get('https://i02c110.p.ssafy.io:8887/api/auth/check', {
    headers: { Authorization: token },
  });

// 로그인중인 유저의 상태 가져오기
export const getCurrentUser = token =>
  client.get('https://i02c110.p.ssafy.io:8887/api/mem/grade', {
    headers: { Authorization: token },
  });
