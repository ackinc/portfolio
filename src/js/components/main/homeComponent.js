import React from 'react';

import { Link } from 'react-router-dom';

function HomeComponent(props) {
    return (
        <div id="home">
            <div className="bg-logo">
                <img src="/images/vscode-near-black-480x480.png" />
            </div>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default HomeComponent;
