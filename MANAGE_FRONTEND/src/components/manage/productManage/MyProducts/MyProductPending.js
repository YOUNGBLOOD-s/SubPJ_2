import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import palette from '../../../../lib/styles/palette';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 350,
    display: 'flex',
  },
  media: {
    height: 200,
  },
});

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .label {
    color: ${palette.grey[500]};
    margin-bottom: 0.5rem;
  }
  .ko-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    .en-name {
      font-size: 1rem;
      color: ${palette.theme[300]};
      font-weight: 500;
    }
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .text1 {
    margin-bottom: 1rem;
  }
`;

const MyProductPending = ({ ad }) => {
  const classes = useStyles();
  const { ko_name, en_name } = ad;
  return (
    <Card className={classes.root} variant="outlined">
      <ContentWrapper>
        <div className="label">상품명</div>
        <div className="ko-name">
          {ko_name} <span className="en-name">{en_name.toUpperCase()}</span>
        </div>
        <DesktopMacIcon className="icon" />
        <div className="text1">관리자 확인</div>
        <div className="text2">대기중</div>
      </ContentWrapper>
    </Card>
  );
};

export default MyProductPending;
