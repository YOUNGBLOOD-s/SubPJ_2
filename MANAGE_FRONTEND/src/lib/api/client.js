import axios from 'axios';

const client = axios.create();

// API 주소를 다른 곳으로 사용함
// client.defaults.baseURL = ''

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
