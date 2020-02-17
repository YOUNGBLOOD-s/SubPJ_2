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

const FullScreenDialog = ({ data, open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const QrImage = styled.img`
    z-index: 999;
    width: 20vh;
    height: 20vh;
    position: absolute;
    right: 2%;
    top: 2%;
    padding: 7px;
    background: rgba(0, 0, 0, 0.5);
    @media only screen and (max-width: 768px) {
      top: inherit;
      width: 15vh;
      height: 15vh;
      bottom: 18%;
    }
  `;

  return (
    <div>
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
          </Toolbar>
        </AppBar>

        <QrImage
          className="qr"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://i02c110.p.ssafy.io:8282/detail/${data.id}?qr=true`}
        />
        <NFSlider details={data.details} setOpen={setOpen} open={open} />
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
