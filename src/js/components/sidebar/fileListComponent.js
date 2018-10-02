import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function FileListComponent(props) {
    const files = props.files;
    return (
        <ul>
            {files.map(file => (
                <li key={file.name} className={file.children ? 'folder' : ''}>
                    <NavLink to={`/${file.name}`}>
                        <img
                            className="explorer-icon"
                            src={`${file['explorer-icon']}`} />
                        <span>
                            {`${file.name}${file['explorer-extension']}`}
                        </span>
                        {/* {file.children ?
                            <FileListComponent files={file.children} /> :
                            null} */}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

FileListComponent.propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        'explorer-icon': PropTypes.string.isRequired,
        'explorer-extension': PropTypes.string.isRequired,
        children: PropTypes.array
    })).isRequired,
    prefixPath: PropTypes.string.isRequired
};
