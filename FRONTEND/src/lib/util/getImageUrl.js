const getImageUrl = (size, filename) => {
  const URL = 'https://nearbyad-thumbnail-resized.s3-us-west-2.amazonaws.com';
  switch (size) {
    case 'sm':
      return `${URL}/${size}/${filename}`;
    case 'md':
      return `${URL}/${size}/${filename}`;
    case 'lg':
      return `${URL}/${size}/${filename}`;
    case 'origin':
      return `${URL}/${size}/${filename}`;
    case 'static':
      return `${URL}/static/${filename}`;
    default:
      return `${URL}/nocontent.img`;
  }
};

export default getImageUrl;
