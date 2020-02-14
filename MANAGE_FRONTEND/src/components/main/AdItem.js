import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
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
      color: ${palette.teal[300]};
      font-weight: 500;
    }
  }

  .speech {
    font-size: 1rem;
    color: ${palette.grey[600]};
    margin: 1rem 0;
  }

  .price {
    text-align: end;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
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
    .text {
      color: ${palette.grey[600]};
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
  const { name, speech, price, en_name, idx: id, image, s_date, f_date } = ad;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/detail/${id}`}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={image} />
          <CardContent>
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
              <div className="speech">{speech}</div>
              <div className="price">₩ {Number(price).toLocaleString()}원</div>
            </ContentWrapper>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AdItem;
