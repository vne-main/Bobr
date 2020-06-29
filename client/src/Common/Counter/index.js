import React from 'react';

export default ({ value }) => {
  let colorVote = {
    color: value >= 0 ? (value === 0 ? '#548eaa' : '#6c9007') : '#d53c30'
  };
  return (
    <i style={colorVote}>
      {value > 0 && <b>+</b>}
      {value}
    </i>
  );
};
