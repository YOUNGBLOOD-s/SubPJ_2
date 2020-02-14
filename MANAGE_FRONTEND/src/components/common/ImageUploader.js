import React, { useState, useRef } from 'react';
import AWS from 'aws-sdk';
import component from '../../lib/material/component';
import styled from 'styled-components';
import LinearLoader from './LinearLoader';

const ImageWrapper = styled.div`
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5rem;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  display: none;
`;

const ImageUploader = ({ imageUrl, setImageUrl, inputId }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const UploadInput = useRef(null);
  const albumBucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const bucketRegion = process.env.REACT_APP_AWS_REGION;
  const IdentityPoolId = process.env.REACT_APP_AWS_POOLID;

  const upload = () => {
    if (!file) {
      alert('업로드할 파일이 없습니다!');
      return;
    }
    setLoading(true);
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
        const { Location } = data;
        setImageUrl(Location);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleFileUpload = () => {
    setFile(UploadInput.current.files[0]);
  };

  return (
    <component.Grid container spacing={1}>
      <component.Grid item xs={12}>
        <InputWrapper>
          <component.Grid item xs={8}>
            <label
              htmlFor={`file-upload${inputId}`}
              className="custom-file-upload"
            >
              <i className="fa fa-cloud-upload"></i>{' '}
              {file ? file.name : '클릭해서 이미지 선택'}
            </label>
            <StyledInput
              id={`file-upload${inputId}`}
              ref={UploadInput}
              type="file"
              onChange={handleFileUpload}
              accept=".jpg,.jpeg,.png,.gif"
            />
          </component.Grid>
          <component.Grid item xs={4}>
            <component.Button
              onClick={upload}
              color="primary"
              variant="contained"
              fullWidth
            >
              업로드
            </component.Button>
          </component.Grid>
        </InputWrapper>
      </component.Grid>
      <component.Grid item xs={12}>
        <ImageWrapper>
          {loading ? (
            <LinearLoader />
          ) : (
            <StyledImg
              src={
                imageUrl
                  ? imageUrl
                  : 'https://crestaproject.com/demo/lontano-pro/wp-content/themes/lontano-pro/images/no-image-slide.png'
              }
              alt="날씨별 이미지"
            />
          )}
        </ImageWrapper>
      </component.Grid>
    </component.Grid>
  );
};

export default ImageUploader;
