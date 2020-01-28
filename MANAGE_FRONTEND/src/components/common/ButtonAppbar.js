import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({ user, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            네곁에 통합 관리 페이지
          </Typography>
          {user ? (
            <>
              <p>환영합니다. {user.username}님.</p>
              <Button color="inherit" onClick={onLogout}>로그아웃</Button>
            </>
          ) : (<>
            <Link to="/register">
              <Button color="inherit">회원가입</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">로그인</Button>
            </Link>
          </>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar