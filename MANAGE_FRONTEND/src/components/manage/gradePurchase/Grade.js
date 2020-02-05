import React from 'react';
import styled from 'styled-components';
import GradeCard from './GradeCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Grade = () => {
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

  const classes = useStyles();
  const spacing = 5;

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
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
    </>
  );
};

export default Grade;
