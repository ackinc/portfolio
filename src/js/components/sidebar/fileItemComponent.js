import React from 'react';
import PropTypes from 'prop-types';

function FileItemComponent(props) {
  return (
    <li className={props.isActiveTab ? 'active' : ''} onClick={() => props.openTab(props.name)}>
      <img className="explorer-icon" src={props.icon} />
      <span>{`${props.name}${props.ext}`}</span>
    </li>
  );
}

FileItemComponent.propTypes = {
  name: PropTypes.string,
  ext: PropTypes.string,
  icon: PropTypes.string,
  openTab: PropTypes.func,
};

export default FileItemComponent;
