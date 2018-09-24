import React from 'react';

class NavComponent extends React.Component {
    render() {
        return (
            <div className="strip">
                <div className="logo">
                    <a href=""><img src="./images/vscode-200x200.png" alt="VSCode" title="Welcome" /></a>
                </div>
                <nav>
                    <ul>
                        {this.props.elems.map(elem => {
                            return (
                                <li onClick={() => this.props.handleClick(elem.name)}
                                    key={elem.name}>
                                    <img src={elem['nav-icon']}
                                        alt={elem.name} title={elem.name} />
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavComponent;
