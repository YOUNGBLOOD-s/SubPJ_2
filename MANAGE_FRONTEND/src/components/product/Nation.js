import React from 'react';

const Nation = ({ nation }) => {
  const { en_name, ko_name, dust, speech, price } = nation;
  return (
    <div>
      <div>{en_name}</div>
      <div>{ko_name}</div>
      <div>{dust}</div>
      <div>{speech}</div>
      <div>{price}</div>
    </div>
  );
};

export default Nation;
