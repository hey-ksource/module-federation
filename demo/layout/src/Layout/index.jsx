import React from 'react';
import Watermark from '@/components/Watermark';
import './style.less';

export default (props) => {
  return (
    <>
      <div className="layout">
        <div className="header">Header</div>
        <div className="content">
          <div className="menu">Menu</div>
          <div className="page-container">{props.children}</div>
        </div>
      </div>
      <Watermark />
    </>
  );
};
