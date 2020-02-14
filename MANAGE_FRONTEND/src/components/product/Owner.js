import React from 'react';
import gradeType from '../../lib/data/gradeType';

const Owner = ({ owner }) => {
  const { username, company, grade } = owner;
  return (
    <div>
      <div>유저명 : {username}</div>
      <div>회사명 : {company}</div>
      <div>등급 : {gradeType[grade]}</div>
    </div>
  );
};

export default Owner;
