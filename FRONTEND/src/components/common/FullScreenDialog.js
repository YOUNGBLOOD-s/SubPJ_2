import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
import NFSlider from './NFSlider';

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

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // var timer = undefined;

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
            {/* <Typography variant="h6" className={classes.title}> */}
            {/* {data['title']} */}
            {/* </Typography> */}
            {/* <Button autoFocus color="inherit" onClick={handleClose}> */}
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
