import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './appComponent';

import rawData from '../../data.json';

// webpack can only import JSON data that is inside an object
// we want an array, since the nav elements have a natural ordering
function processRawData(rawData) {
    const navKeys = Object.keys(rawData);
    const navElems = [];
    for (let i = 0; i < navKeys.length; i += 1) {
        navElems.push(Object.assign({ __name: navKeys[i] }, rawData[navKeys[i]]));
    }
    navElems.sort((a, b) => a.order - b.order);

    return navElems;
}

ReactDOM.render(
    <AppComponent data={processRawData(rawData)} />,
    document.querySelector('#root')
);
