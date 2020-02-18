// 미세먼지 수치 (1-좋음, 2-보통, 3-나쁨, 4-매우나쁨)

export const dustType = type => {
  switch (parseInt(type)) {
    case 1:
      return '좋음';
    case 2:
      return '보통';
    case 3:
      return '나쁨';
    case 4:
      return '매우나쁨';

    default:
      return '알수없음';
  }
};
