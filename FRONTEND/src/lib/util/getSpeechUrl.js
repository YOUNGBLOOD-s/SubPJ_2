const getSpeechUrl = index => {
  const URL = 'https://nearbyad-thumbnail-resized.s3-us-west-2.amazonaws.com';
  return `${URL}/speech/${index}.mp3`;
};

export default getSpeechUrl;
