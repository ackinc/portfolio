import React from 'react';
import PropTypes from 'prop-types';

import FileListComponent from './fileListComponent';

class ExplorerComponent extends React.Component {
    render() {
        const props = this.props;
        const sectionsNamesOrdered = Object.keys(props.data);
        sectionsNamesOrdered.sort((a, b) => props.data[a].order - props.data[b].order);

        const files = [];
        sectionsNamesOrdered.forEach(sectionName => {
            files.push({
                name: sectionName,
                'explorer-icon': props.data[sectionName]['explorer-icon'],
                'explorer-extension': props.data[sectionName]['explorer-extension'],
            });
        });

        return (
            <div id="explorer">
                <h1>Explorer</h1>
                <div className="highlighted-row">
                    <img src='./images/icons/arrow-downright-32x32.png' />
                    <span>Portfolio Site</span>
                </div>
                <FileListComponent files={files} activeTabName={props.activeTabName} openTab={props.openTab} />
            </div>
        );
    }
}

ExplorerComponent.propTypes = {
    data: PropTypes.object,
    activeTabName: PropTypes.string,
    openTab: PropTypes.func,
};

export default ExplorerComponent;
