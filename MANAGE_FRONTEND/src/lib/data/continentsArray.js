export const getContinetName = continent => {
  switch (continent) {
    case '1':
      return '유럽';
    case '2':
      return '북태평양';
    case '3':
      return '아프리카';
    case '4':
      return '아시아';
    case '5':
      return '북미';
    default:
      return '알수없음';
  }
};

const continentsArray = [
  {
    value: '1',
    label: '유럽',
  },
  {
    value: '2',
    label: '북태평양',
  },
  {
    value: '3',
    label: '아프리카',
  },
  {
    value: '4',
    label: '아시아',
  },
  {
    value: '5',
    label: '북미',
  },
];

export default continentsArray;
