import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/styles/hljs';

function AboutComponent(props) {
    return (
        <div id="about">
            <SyntaxHighlighter
                language="javascript"
                style={tomorrowNight}
                customStyle={{ background: '#1E1E1E' }}
                showLineNumbers="true"
            >
                {JSON.stringify(props.data, undefined, 2)}
            </SyntaxHighlighter>
        </div>
    );
}

export default AboutComponent;
