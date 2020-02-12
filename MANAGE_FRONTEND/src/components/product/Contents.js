import React from 'react';

const Contents = ({ contents }) => {
  return (
    <div>
      {contents.map(
        ({ idx, day, seq, title, detail, image, tofrom, transport }) => (
          <div key={idx}>
            <div>{day}일차</div>
            <div>{seq}번째</div>
            <div>{title}</div>
            <div>{image}</div>
            <div>{detail}</div>
            <div>{tofrom}</div>
            <div>{transport}</div>
          </div>
        ),
      )}
    </div>
  );
};

export default Contents;
