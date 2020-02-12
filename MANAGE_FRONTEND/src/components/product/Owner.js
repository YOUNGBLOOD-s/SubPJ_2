import React from 'react';

const gradeName = {
  0: 'BASIC (일반 사용자)',
  1: 'ADMIN (관리자)',
  2: 'SILVER (일반 셀러)',
  3: 'GOLD (VIP 셀러)',
  4: 'Platinum (VVIP 셀러)',
};

const Owner = ({ owner }) => {
  const { username, company, grade } = owner;
  return (
    <div>
      <div>유저명 : {username}</div>
      <div>회사명 : {company}</div>
      <div>등급 : {gradeName[grade]}</div>
    </div>
  );
};

export default Owner;
