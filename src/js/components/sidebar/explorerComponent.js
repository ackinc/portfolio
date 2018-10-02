import React from 'react';

import { NavLink } from 'react-router-dom';
import FileListComponent from './fileListComponent';

class ExplorerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: true };
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }

    toggleExpansion() {
        this.setState(prevState => ({ expanded: !prevState.expanded }));
    }

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
                children: props.data[sectionName].expandable ? props.data[sectionName].data : undefined
            })
        });

        return (
            <div id="explorer">
                <h1>Explorer</h1>
                <div className="highlighted-row" onClick={this.toggleExpansion}>
                    <img
                        src={this.state.expanded ?
                            './images/icons/arrow-downright-32x32.png' :
                            './images/icons/arrow-right-32x32.png'} />
                    <span>Portfolio Site</span>
                </div>
                {
                    this.state.expanded ?
                        <FileListComponent files={files} prefixPath="/" /> :
                        null
                }
            </div>
        );
    }
}

export default ExplorerComponent;
