import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App5 from './App5';
import App1 from './App1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App5 propArray={['val']} propBool={true} props1 = {1} />, document.getElementById('root'));
//ReactDOM.render(<App1 />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
