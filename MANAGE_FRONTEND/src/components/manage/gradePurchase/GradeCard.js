import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import axios from 'axios';

const GradeImgWrapper = styled.div`
  text-align: center;
  min-height: 120px;
`;

const GradeTitle = styled.div`
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
        'http://i02c110.p.ssafy.io:8887/api/mem/update/' + grade,
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
    <>
      <Card className={classes.root} onClick={onClick}>
        <CardActionArea>
          <CardContent>
            <GradeImgWrapper>
              <img src={image} alt="" />
            </GradeImgWrapper>
            <GradeTitle>{title}</GradeTitle>
            <GradePrice>
              &#8361; {price}
              <GradePriceSub>per month</GradePriceSub>
            </GradePrice>
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
    </>
  );
};

export default GradeCard;
