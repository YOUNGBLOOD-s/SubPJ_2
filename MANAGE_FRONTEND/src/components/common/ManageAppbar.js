import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useSelector } from 'react-redux';

const AppBarWrapper = styled.div`
  background-color: ${palette.grey[200]};
  padding: 1rem;
`;

const LinkWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const ManageAppbar = () => {
  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));
  return (
    <AppBarWrapper>
      <LinkWrapper>
        <StyledLink to="/manage/grade">등급구매</StyledLink>
        <StyledLink to="/manage/mypage">마이페이지</StyledLink>
        {member && member.grade !== 0 && (
          <>
            <StyledLink to="/manage/product">나의광고</StyledLink>
            <StyledLink to="/manage">광고통계</StyledLink>
          </>
        )}
      </LinkWrapper>
    </AppBarWrapper>
  );
};

export default ManageAppbar;
