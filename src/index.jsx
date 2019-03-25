import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './componments/hello';
// // ReactDOM.render(<div>111</div>,
// //   document.getElementById('root')
// // );
import './index.css';
import Main from './pages/Main';
ReactDOM.render(
  <div id='lqb' className='demo' key='xx'>
    今天天气不错2222
    <Main/>
    <Hello />
  </div>, document.getElementById('root'));
