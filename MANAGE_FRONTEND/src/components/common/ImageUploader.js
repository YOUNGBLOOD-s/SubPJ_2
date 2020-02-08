import React, { useState, useRef } from 'react';
import AWS from 'aws-sdk';

const ImageUploader = ({ imageUrl, setImageUrl }) => {
  const [file, setFile] = useState(null);
  const UploadInput = useRef(null);
  const albumBucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const bucketRegion = process.env.REACT_APP_AWS_REGION;
  const IdentityPoolId = process.env.REACT_APP_AWS_POOLID;

  const upload = () => {
    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId,
      }),
    });

    const timestamp = new Date().getTime();
    const photoKey = `uploaded/${timestamp + file.name}`;
    const uploaded = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: photoKey,
        Body: file,
        ACL: 'public-read',
      },
    });

    const promise = uploaded.promise();
    promise
      .then(data => {
        const { Location, key, Bucket } = data;
        console.log(Location);
        setImageUrl(Location);
        // setImageUrl(Location) //위에서 set받아서 수행
      })
      .catch(err => console.log(err));
  };

  const handleFileUpload = () => {
    setFile(UploadInput.current.files[0]);
  };

  return (
    <div>
      <h5>현재 image: {imageUrl}</h5>
      <input
        ref={UploadInput}
        type="file"
        onChange={handleFileUpload}
        accept=".jpg,.jpeg,.png,.gif"
      />
      <label className="custom-file-label" htmlFor="inputGroupFile04">
        {file ? file.name : '이미지를 선택해주세요'}
      </label>
      <button onClick={upload}>업로드</button>
    </div>
  );
};

export default ImageUploader;
