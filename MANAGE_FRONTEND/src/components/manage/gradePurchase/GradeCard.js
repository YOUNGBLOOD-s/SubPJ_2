import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const GradeImgWrapper = styled.div`
  text-align: center;
  min-height: 120px;
`;

const GradeTitle = styled.div`
  font-size: 2rem;
  margin-top: 2rem;
`;

const GradeContentWrapper = styled.div`
  margin-left: 5rem;
`;

const GradeContent = styled.div`
  font-size: 1rem;
  text-align: left;
  margin-left: 10%;
  margin-bottom: 10px;
`;

const GradePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const GradePriceSub = styled.span`
  color: #cdcdcd;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: normal;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
    textAlign: 'center',
  },
  hr: {
    borderColor: palette.teal[50],
    margin: '1rem',
  },
  check: {
    color: 'green',
  },
});
const GradeCard = ({ title, image, grade, price, option }) => {
  const spacing = 2;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <GradeImgWrapper>
            <img src={image} />
          </GradeImgWrapper>
          <GradeTitle>{title}</GradeTitle>
          <GradePrice>
            &#8361; {price}
            <GradePriceSub>per month</GradePriceSub>
          </GradePrice>
          <hr className={classes.hr} />
          {option.map(item => {
            return (
              <GradeContent>
                <i className={`fas fa-check ${classes.check}`}></i>
                &nbsp; {item}
              </GradeContent>
            );
          })}
          <GradeContentWrapper></GradeContentWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GradeCard;
