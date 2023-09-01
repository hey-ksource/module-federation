import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import '@/styles/common.less';

const root = document.querySelector('#root');

ReactDOM.render(
  <Layout>
    <div className="text">
      This Is App.
    </div>
  </Layout>
  ,
  root,
);
