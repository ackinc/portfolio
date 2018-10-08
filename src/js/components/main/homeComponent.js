import React from 'react';

function HomeComponent(props) {
    return (
        <div id="home">
            <div className="bg-logo">
                <img src="/images/vscode-near-black-480x480.png" />
            </div>
            <ul>
                <li onClick={() => props.openTab('about')}>About</li>
                <li onClick={() => props.openTab('projects')}>Projects</li>
                <li onClick={() => props.openTab('contact')}>Contact</li>
            </ul>
        </div>
    );
}

export default HomeComponent;
