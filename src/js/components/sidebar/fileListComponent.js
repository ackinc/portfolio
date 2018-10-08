import React from 'react';
import PropTypes from 'prop-types';

import FileItemComponent from './fileItemComponent';

export default function FileListComponent(props) {
    const files = props.files;
    return (
        <ul>
            {files.map(file => (
                <FileItemComponent
                    key={file.name}
                    name={file.name}
                    ext={file['explorer-extension']}
                    icon={file['explorer-icon']}
                    isActiveTab={props.activeTabName === file.name}
                    openTab={props.openTab}
                />
            ))}
        </ul>
    );
}

FileListComponent.propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        'explorer-icon': PropTypes.string.isRequired,
        'explorer-extension': PropTypes.string.isRequired
    })).isRequired,
    openTab: PropTypes.func,
};
