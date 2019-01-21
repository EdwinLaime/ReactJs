import "@babel/polyfill"

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import datos from './data.json';

const headings = ['When', 'Who', 'Description'];

ReactDOM.render(
    <App data={datos} title='OpenLibrary API' headings={headings}/>,
    document.getElementById('app')
);