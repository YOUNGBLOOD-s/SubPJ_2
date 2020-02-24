import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonAppBar from '../../components/common/ButtonAppbar';
import { logout } from '../../modules/user';
import { authLogout } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

const ButtonAppbarContainer = ({ history }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout()); // 로그아웃 액션 디스패치
    dispatch(authLogout()); // auth삭제 액션 디스패치
    history.push('/login'); // 로그아웃시 메인페이지로 이동시키기
  };

  return <ButtonAppBar user={user} onLogout={onLogout} />;
};

export default withRouter(ButtonAppbarContainer);
