import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password, company }) =>
  client.post('/api/auth/register', { username, password, company });

// 로그인 상태 확인
export const check = (token) => client.get('/api/auth/check', { headers: { 'Authorization': token } });