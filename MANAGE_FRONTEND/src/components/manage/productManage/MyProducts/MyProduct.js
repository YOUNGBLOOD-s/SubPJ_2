import React from 'react';
import component from '../../../../lib/material/component';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { remove_list } from '../../../../lib/api/ad';
import { removeAd } from '../../../../modules/ads';
import DeleteAlertDialog from '../../../common/DeleteAlertDialog';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyProduct = ({ ad }) => {
  const classes = useStyles();
  const { idx, ko_name, en_name, s_date, f_date, price, customer } = ad;
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const dispatch = useDispatch();
  const onRemoveAd = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      await remove_list({ token, idx });
      dispatch(removeAd(idx));
    } catch (e) {
      console.log(e);
    }
  };

  const onUpdateAd = () => {
    console.log('업데이트 시도. 모달로 띄울까..? 나중에 해용');
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <component.Grid container>
          <ContentWrapper>
            <div>ID : {idx}</div>
            <div>
              {ko_name} ({en_name})
            </div>
            <div>출발 : {s_date}</div>
            <div>도착 : {f_date}</div>
            <div>가격 : {price}</div>
            <div>광고주 : {customer}</div>
          </ContentWrapper>
        </component.Grid>
      </CardContent>
      {user && user.username === 'admin' && (
        <CardActions>
          <component.Button onClick={onUpdateAd}>수정</component.Button>
          <DeleteAlertDialog>
            {/* children으로 삭제 버튼 넣어줌 */}
            <component.Button onClick={onRemoveAd} color="secondary">
              삭제
            </component.Button>
          </DeleteAlertDialog>
        </CardActions>
      )}
    </Card>
  );
};

export default MyProduct;
