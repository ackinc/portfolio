import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/styles/hljs';

function JSONFileRenderComponent(props) {
  return (
    <div id={props.id} class="rendered-json">
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

JSONFileRenderComponent.propTypes = {
  id: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default JSONFileRenderComponent;
