import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const StyledChip = withStyles({
  root: {
    position: 'absolute',
    top: '50%',
    margin: '0 auto',
    zIndex: '999',
    fontSize: '1.3rem',
    padding: '0.3rem',
    opacity: '0.6',
    transform: 'translate(-50%, -50%)',
  },
})(Chip);

const ClickNotice = () => {
  return (
    <>
      <StyledChip
        color="secondary"
        variant="default"
        label="궁금해? 두번 눌러봐! 😝"
      ></StyledChip>
    </>
  );
};

export default ClickNotice;
