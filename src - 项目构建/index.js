import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/index.jsx';
import './assets/base.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)