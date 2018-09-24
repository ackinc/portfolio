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
                        {this.props.elems.map((elem, idx) => {
                            return (
                                <li onClick={() => this.props.handleClick(elem.__name)}
                                    key={elem.__name}
                                    className={this.props.activeIdx === idx ? 'active' : ''}>
                                    <img src={elem['nav-icon']}
                                        alt={elem.__name} title={elem.__name} />
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
