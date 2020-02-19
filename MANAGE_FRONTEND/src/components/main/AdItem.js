import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import getImageUrl from '../../lib/utill/getImageUrl';

const AdItemBlock = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  .image {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 1rem;
  bottom: 0.5%;
  .ko-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    .en-name {
      font-size: 1rem;
      color: ${palette.theme[300]};
      font-weight: 500;
    }
  }
`;

const ScheduleWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  .date-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    color: white;
    .text {
      color: ${palette.grey[400]};
    }
    .date {
      font-weight: bold;
    }
  }
  .dash {
    flex-grow: 1;
    padding: 1rem;
    .bar {
      border-bottom: 2px dashed ${palette.grey[500]};
      height: 50%;
    }
  }
`;

const AdItem = ({ ad }) => {
  const { name, en_name, idx: id, image, s_date, f_date } = ad;

  return (
    <AdItemBlock>
      <Link to={`/detail/${id}`}>
        <ImageWrapper>
          <img className="image" src={getImageUrl('md', image)} alt="" />
        </ImageWrapper>
        <ContentWrapper>
          <div className="ko-name">
            {name} <span className="en-name">{en_name}</span>
          </div>
          <ScheduleWrapper>
            <div className="date-box">
              <div className="text">
                <span role="img" aria-label="img">
                  🛫
                </span>{' '}
                출발일
              </div>
              <div className="date">{s_date}</div>
            </div>
            <div className="dash">
              <div className="bar" />
            </div>
            <div className="date-box">
              <div className="text">
                <span role="img" aria-label="img">
                  🛬
                </span>{' '}
                도착일
              </div>
              <div className="date">{f_date}</div>
            </div>
          </ScheduleWrapper>
        </ContentWrapper>
      </Link>
    </AdItemBlock>
  );
};

export default AdItem;
