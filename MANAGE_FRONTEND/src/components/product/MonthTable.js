import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

const MonthTable = ({ datas }) => {
  const classes = useStyles();
  const monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>월(月)</TableCell>
            <TableCell align="center">온도</TableCell>
            <TableCell align="center">습도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {monthes.map((month, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {month}월
              </TableCell>
              <TableCell align="center">{datas[`tem${month}`]} ℃</TableCell>
              <TableCell align="center">{datas[`hum${month}`]} %</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MonthTable;
