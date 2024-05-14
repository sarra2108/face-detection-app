import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='magic black f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='magic black f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;