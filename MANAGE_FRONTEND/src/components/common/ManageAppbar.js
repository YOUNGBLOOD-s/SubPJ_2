import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../modules/user';

const AppBarWrapper = styled.div`
  background-color: ${palette.grey[200]};
  padding: 0.5rem;
`;

const LinkWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const StyledLink = styled(Link)`
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  :hover {
    background-color: ${palette.grey[500]};
    transition-duration: 0.5s;
  }
`;

const ManageAppbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));
  return (
    <AppBarWrapper>
      <LinkWrapper>
        {member && member.grade !== 0 && (
          <>
            <StyledLink to="/manage">광고통계</StyledLink>
            <StyledLink to="/manage/product">나의광고</StyledLink>
          </>
        )}
        <StyledLink to="/manage/mypage">마이페이지</StyledLink>
        <StyledLink to="/manage/grade">등급구매</StyledLink>
      </LinkWrapper>
    </AppBarWrapper>
  );
};

export default ManageAppbar;
