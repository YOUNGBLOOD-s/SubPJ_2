import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';
import NFSlider from './NFSlider';
import ADNavBar from './ADNavBar';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    background: 'transparent',
    color: 'white',
    boxShadow: 'none',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ data, open, setOpen, nextURL }) => {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var timer = undefined;

  const QrImage = styled.img`
    z-index: 999;
    width: 20vh;
    height: 20vh;
    position: absolute;
    right: 2%;
    top: 2%;
    padding: 7px;
    background: rgba(0, 0, 0, 0.5);
  `;

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {/* {data['title']} */}
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}> */}
            <h2>
              <WbSunnyIcon /> 17&deg;C ~ -3&deg;C&nbsp;&nbsp;&nbsp;
            </h2>
            <h2>
              <OpacityIcon /> 0 %
            </h2>
          </Toolbar>
        </AppBar>

        <QrImage
          className="qr"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nextURL}`}
        />
        <NFSlider data={data} setOpen={setOpen} />
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
