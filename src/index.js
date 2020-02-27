import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.getElementById('root'));
