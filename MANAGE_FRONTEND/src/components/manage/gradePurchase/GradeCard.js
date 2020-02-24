import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import axios from 'axios';
import getImageUrl from '../../../lib/utill/getImageUrl';

const GradeImgWrapper = styled.div`
  text-align: center;
  min-height: 120px;
`;

const GradeTitle = styled.div`
  font-family: 'GmarketSansLight';
  font-size: 2rem;
  margin-bottom: 1rem;
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
  font-family: 'GmarketSansLight';
  font-size: 1.5rem;
  font-weight: bolder;
  margin-top: 0.5rem;
`;

const GradePriceSub = styled.span`
  font-family: 'GmarketSansLight';
  color: #cdcdcd;
  font-size: 1rem;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  hr: {
    borderColor: palette.theme[50],
    margin: '1rem',
  },
  check: {
    color: 'green',
  },
});

const GradeCard = ({ info }) => {
  const { title, grade, price, option } = info;
  const image = process.env.PUBLIC_URL + info.image;
  const classes = useStyles();

  const token = sessionStorage.getItem('access_token');

  const gradeAlert = {
    '-1': '등급 구매에 실패하였습니다.',
    '0': '현재 등급과 동일하여 구매가 취소되었습니다.',
    '1': `${title}님, 환영합니다!`,
  };

  const updateGrade = () => {
    axios
      .put(
        'https://i02c110.p.ssafy.io:8887/api/mem/update/' + grade,
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        res.data.value === 0 ? alert(gradeAlert[0]) : alert(gradeAlert[1]);
      })
      .catch(err => {
        alert(gradeAlert[-1]);
      });
  };

  const onClick = () => {
    window.confirm(title + ' 등급을 구매하시겠습니까?')
      ? updateGrade()
      : window.alert('등급 구매를 취소하였습니다.');
  };

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <GradeImgWrapper>
            <img src={getImageUrl('static', image)} alt="" />
          </GradeImgWrapper>
          <GradeTitle>{title}</GradeTitle>
          <GradePriceSub>per month</GradePriceSub>
          <GradePrice>&#8361; {price}</GradePrice>
          <hr className={classes.hr} />
          {option.map((item, idx) => {
            return (
              <GradeContent key={idx}>
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
