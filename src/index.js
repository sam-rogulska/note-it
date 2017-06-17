import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Notes from './components/Notes';

ReactDOM.render(<Notes />, document.getElementById('root'));
registerServiceWorker();
