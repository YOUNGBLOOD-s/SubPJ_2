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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MyProduct = ({ ad }) => {
  const classes = useStyles();
  console.log(ad);
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
          <div>
            {idx} : {ko_name}
          </div>
        </component.Grid>
      </CardContent>
      {user && user.username === 'admin' && (
        <CardActions>
          <component.Button onClick={onUpdateAd}>수정</component.Button>
          <DeleteAlertDialog>
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
