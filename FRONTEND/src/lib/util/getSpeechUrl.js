const getSpeechUrl = index => {
  const URL = process.env.REACT_APP_BUCKET_URL;
  return `${URL}/speech/${index}.mp3`;
};

export default getSpeechUrl;
