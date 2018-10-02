import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, NavLink } from 'react-router-dom';

function NavComponent(props) {
    return (
        <nav>
            <ul>
                <Redirect from="/" to="/home" />
                {props.sections.map((elem) => (
                    <li key={elem.name} onClick={() => props.openTab(elem.name)}>
                        <NavLink to={`/${elem.name}`}>
                            <img src={elem.icon} alt={elem.name} title={elem.name} />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

NavComponent.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
    })),
    openTab: PropTypes.func,
};

export default NavComponent;
