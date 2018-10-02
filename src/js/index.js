import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AppComponent from './components/appComponent';

import data from '../../data.json';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" render={(props) => <AppComponent data={data} {...props} />} />
    </BrowserRouter>,
    document.querySelector('#root')
);
