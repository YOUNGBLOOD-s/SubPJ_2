import React from 'react';

const Owner = ({ owner }) => {
  const { username, company } = owner;
  return (
    <div>
      <h4>소유자</h4>
      <div>{username}</div>
      <div>{company}</div>
    </div>
  );
};

export default Owner;
