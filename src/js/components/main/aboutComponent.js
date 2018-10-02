import React from 'react';

import renderjson from 'renderjson';
renderjson.set_icons('', '').set_max_string_length(80).set_show_to_level('all');

class AboutComponent extends React.Component {
    componentDidMount() {
        document.querySelector('main #about').appendChild(renderjson(this.props.data));
    }

    render() {
        return (
            <div id="about"></div>
        );
    }
}

export default AboutComponent;
