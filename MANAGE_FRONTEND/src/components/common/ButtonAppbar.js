import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import component from '../../lib/material/component';
import palette from '../../lib/styles/palette';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: palette.teal[300],
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
  welcome: {
    marginLeft: '0.5rem'
  },
  button: {
    padding: 0,
    marginLeft: '0.5rem'
  }
}));

const ButtonAppBar = ({ user, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.paper}>
        <Toolbar>
          <component.Typography variant="h6" className={classes.title}>
            NEARBY AD 관리페이지
          </component.Typography>
          {user ? (
            <>
              <component.Typography className={classes.welcome}>환영합니다. {user.username}님.</component.Typography>
              <component.Button className={classes.button} color="inherit" onClick={onLogout}>로그아웃</component.Button>
            </>
          ) : (<>
            <Link to="/register">
              <component.Button className={classes.button} color="inherit">회원가입</component.Button>
            </Link>
            <Link to="/login">
              <component.Button className={classes.button} color="inherit">로그인</component.Button>
            </Link>
          </>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar