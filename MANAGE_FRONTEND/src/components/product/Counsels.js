import React from 'react';

const Counsels = ({ counsels, user }) => {
  return (
    <div>
      {counsels.map(({ age, name, email, tel, date, text, completed }, idx) => (
        <div key={idx}>
          <div>{completed ? '완료' : '미완료'}</div>
          <div>
            {name} ({age})
          </div>
          <div>{date}</div>
          <div>
            {email}, {tel}
          </div>
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default Counsels;
