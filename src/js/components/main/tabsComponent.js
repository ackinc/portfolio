import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TabsComponent(props) {
    return (
        <ul className="tab-list">
            {props.openedTabs.map(tab => (
                <li key={tab}
                    className={`tab${props.openedTabs[props.activeTabIdx] === tab ? ' active' : ''}`}
                    onClick={() => props.openTab(tab)}>
                    <Link to={`/${tab}`}>{tab}</Link>
                    <span
                        className="close-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.closeTab(tab);
                        }}
                    >
                        <img src="./images/icons/cross-32x32.png" />
                    </span>
                </li>
            ))}
        </ul>
    );
}

TabsComponent.propTypes = {
    activeTabIdx: PropTypes.number.isRequired,
    openedTabs: PropTypes.arrayOf(PropTypes.string),
    openTab: PropTypes.func,
    closeTab: PropTypes.func,
};

export default TabsComponent;
