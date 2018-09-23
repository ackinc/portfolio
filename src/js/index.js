import React from 'react';
import ReactDOM from 'react-dom';

class SidebarComponent extends React.Component {
    render() {
        return (
            <aside>
                <div className="logo">
                    <img src="./images/vscode-200x200.png" alt="VSCode" title="Welcome" />
                </div>
                <nav>
                    <ul>
                        <li><img src="./images/home-white-64x64.png" alt="Home" title="Home" /></li>
                        <li><img src="./images/code-white-64x64.png" alt="Projects" title="Projects" /></li>
                        <li><img src="./images/contact-white-64x64.png" alt="Contact" title="Contact" /></li>
                    </ul>
                </nav>
                <div className="sidebar"></div>
            </aside>
        );
    }
}

class MainComponent extends React.Component {
    render() {
        return (
            <main><h1>Anirudh Nimmagadda</h1></main>
        );
    }
}

ReactDOM.render(
    <div id="container"><SidebarComponent /><MainComponent /></div>,
    document.querySelector('#root')
);
