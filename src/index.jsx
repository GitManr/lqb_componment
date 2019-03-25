import React from 'react';
import ReactDOM from 'react-dom';
import routers from './routers';


ReactDOM.render(
  <div style={{height:'100vh'}}>
    {routers}
  </div>, document.getElementById('root'));
