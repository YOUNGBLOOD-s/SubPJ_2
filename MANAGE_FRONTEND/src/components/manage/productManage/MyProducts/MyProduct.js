import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import palette from '../../../../lib/styles/palette';
import gradeType from '../../../../lib/data/gradeType';
import getImageUrl from '../../../../lib/utill/getImageUrl';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 200,
  },
});

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .ko-name {
    font-size: 1.5rem;
    font-weight: bold;
    .en-name {
      font-size: 1rem;
      color: ${palette.theme[300]};
      font-weight: 500;
    }
  }
  .price {
    font-family: 'GmarketSansLight';
    text-align: end;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .userInfo {
    text-align: end;
    color: ${palette.grey[500]};
    .grade {
      font-weight: bold;
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
    .wrapper {
      color: ${palette.theme[300]};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
      .text {
        color: ${palette.grey[600]};
        margin-left: 0.5rem;
      }
    }
    .date {
      font-family: 'GmarketSansLight';
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

const FlyIcon = ({ type }) => {
  switch (type) {
    case 'up':
      return <i className="fas fa-plane-departure"></i>;
    case 'down':
      return <i className="fas fa-plane-arrival"></i>;

    default:
      return null;
  }
};

const MyProduct = ({ ad, isAdmin }) => {
  const classes = useStyles();
  const { ko_name, en_name, s_date, f_date, price, url } = ad;
  const { company, username, grade } = ad.owner;
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={getImageUrl('sm', url)}
        title={ko_name}
      />
      <CardContent>
        <ContentWrapper>
          <div className="ko-name">
            {ko_name} <span className="en-name">{en_name.toUpperCase()}</span>
          </div>
          <ScheduleWrapper>
            <div className="date-box">
              <div className="wrapper">
                <FlyIcon type="up" />
                <div className="text">출발일</div>
              </div>
              <div className="date">{s_date}</div>
            </div>
            <div className="dash">
              <div className="bar" />
            </div>
            <div className="date-box">
              <div className="wrapper">
                <FlyIcon type="down" />
                <div className="text">도착일</div>
              </div>
              <div className="date">{f_date}</div>
            </div>
          </ScheduleWrapper>
          <div className="price">₩ {Number(price).toLocaleString()}</div>
          {isAdmin && (
            <div className="userInfo">
              <div className="grade">{gradeType[grade]}</div>
              <div>
                {username}, {company}
              </div>
            </div>
          )}
        </ContentWrapper>
      </CardContent>
    </Card>
  );
};

export default MyProduct;
