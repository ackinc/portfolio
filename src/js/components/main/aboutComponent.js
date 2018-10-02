import React from 'react';

import renderjson from 'renderjson';
renderjson.set_icons('', '').set_max_string_length(80).set_show_to_level('all');

class AboutComponent extends React.Component {
    componentDidMount() {
        document.querySelector('#about-content').appendChild(renderjson(this.props.data));
    }

    render() {
        const lineNums = [];
        for (let i = 0; i < 23; i++) {
            lineNums.push(i + 1);
        }

        return (
            <div id="about">
                <div id="gutter">
                    {lineNums.map(n => <div>{n}</div>)}
                </div>
                <div id="about-content">

                </div>
            </div>
        );
    }
}

export default AboutComponent;
