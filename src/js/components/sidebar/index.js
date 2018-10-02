import React from 'react';
import PropTypes from 'prop-types';

import ExplorerComponent from './explorerComponent';
import NavComponent from './navComponent';

function SidebarComponent(props) {
    const sectionsNamesOrdered = Object.keys(props.data);
    sectionsNamesOrdered.sort((a, b) => props.data[a].order - props.data[b].order);

    const sections = [];
    sectionsNamesOrdered.forEach(sectionName => sections.push({
        name: sectionName,
        icon: props.data[sectionName]['nav-icon']
    }));

    return (
        <aside>
            <NavComponent sections={sections} openTab={props.openTab} />
            <ExplorerComponent data={props.data} openTab={props.openTab} />
        </aside>
    );
}

SidebarComponent.propTypes = {
    data: PropTypes.object,
    openTab: PropTypes.func,
    closeTab: PropTypes.func,
};

export default SidebarComponent;
