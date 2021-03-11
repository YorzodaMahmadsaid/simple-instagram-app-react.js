import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
// import App from './App';

const element = (
    <div>
        <h2>Hello world</h2>
        <input type="text" placeholder="Type here"/>
        <button>Submit</button>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

