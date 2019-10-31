import React from 'react';

const MenuItem = ({ title }) => {
  return (
    <div className=''>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  )
};

export default MenuItem;