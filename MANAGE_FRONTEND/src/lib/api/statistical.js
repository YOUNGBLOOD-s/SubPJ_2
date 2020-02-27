import client from './client';

const BASE_URL = 'https://i02c110.p.ssafy.io:8887';

// /api/statistics/15day/{nationIdx}
// 오늘 날짜부터 15일 전까지의 통계 데이터
// /api/statistics/1month/{nationIdx}
// 오늘 날짜부터 1년 전까지의 통계 데이터
// /api/statistics/3hour/{nationIdx}
// 오늘 날짜부터 1일 전까지의 데이터를 3시간씩 묶은 통계 데이터
// /api/statistics/usr/{nationIdx}
// statistics api 사용자 토큰 받아서 해당 사용자 click, qr count만 전송

export const getStat = ({ token, nationIdx, dayType }) =>
  client.get(`${BASE_URL}/api/statistics/${dayType}/${nationIdx}`, {
    headers: {
      Authorization: token,
    },
  });
