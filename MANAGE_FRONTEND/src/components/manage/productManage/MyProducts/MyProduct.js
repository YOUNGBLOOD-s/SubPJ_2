import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

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
`;

const MyProduct = ({ ad }) => {
  const classes = useStyles();
  const { idx, ko_name, en_name, s_date, f_date, price, url } = ad;
  const { company, username } = ad.owner;
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia className={classes.media} image={url} title={ko_name} />
      <CardContent>
        <ContentWrapper>
          <div>ID : {idx}</div>
          <div>
            {ko_name} ({en_name})
          </div>
          <div>출발 : {s_date}</div>
          <div>도착 : {f_date}</div>
          <div>가격 : {price}</div>
          <div>
            광고주 : {username} ({company})
          </div>
        </ContentWrapper>
      </CardContent>
    </Card>
  );
};

export default MyProduct;
