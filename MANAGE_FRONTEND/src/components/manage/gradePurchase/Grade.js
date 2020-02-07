import React from 'react';
import GradeCard from './GradeCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GradeInfo from './GradeInfo';
import styled from 'styled-components';

const gradeInfo = [
  {
    title: '일반 셀러',
    grade: '2',
    price: '300,000',
    image: '/img/tier1.svg',
    option: ['시간당 5회 광고 노출', '2개 광고 등록 가능'],
  },
  {
    title: '파워 셀러',
    grade: '3',
    price: '600,000',
    image: '/img/tier2.svg',
    option: ['시간당 10회 광고 노출', '5개 광고 등록 가능'],
  },
  {
    title: '플래티넘 셀러',
    grade: '4',
    price: '1,000,000',
    image: '/img/tier3.svg',
    option: ['시간당 15회 광고 노출', '광고 등록 개수 제한 없음'],
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    background: 'linear-gradient(to bottom, transparent, #bdbdbd, black)',
  },
  bgtop: {
    // background: '#f0f0f0',
    background: 'linear-gradient(to bottom, white, #eaeaea)',
  },
}));

const HeaderText = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
  margin: 0;
  padding: 2rem;
`;

const Grade = () => {
  const classes = useStyles();

  return (
    <div className={(classes.card, classes.bgtop)}>
      <HeaderText>상품</HeaderText>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {gradeInfo.map(({ title, grade, price, image, option }) => {
              return (
                <Grid key={grade} item>
                  <GradeCard
                    image={process.env.PUBLIC_URL + image}
                    title={title}
                    grade={grade}
                    price={price}
                    option={option}
                  ></GradeCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.bg}>
        <HeaderText>설명</HeaderText>
        <GradeInfo />
      </div>
    </div>
  );
};

export default Grade;
