import React from 'react';
import ButtonAppbarContainer from '../containers/common/ButtonAppbarContainer';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

const AdminPage = () => {
  // const { user } = useSelector(({ user }) => ({
  //   user: user.user,
  // }));

  // FIXME: admin이 아니면 들어올수 없게 만들어야합니다.
  // useEffect(() => {
  //   if (user.username !== 'admin') {
  //     history.push('/');
  //   }
  // }, [user, history]);

  return (
    <div>
      <ButtonAppbarContainer />
      <h1>우리들의 ! 어드민 페이지</h1>
    </div>
  );
};

export default AdminPage;
