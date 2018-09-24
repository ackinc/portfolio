import React from 'react';

import NavComponent from './navComponent';
import SidebarComponent from './sidebarComponent';
import MainComponent from './mainComponent';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curView: this.props.data[0].name
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(newState) {
        this.setState({ curView: newState });
    }

    render() {
        const activeIdx = this.props.data.findIndex(elem => elem.name === this.state.curView);
        const curViewObj = this.props.data[activeIdx];
        return (
            <div id="container">
                <NavComponent elems={this.props.data} activeIdx={activeIdx} handleClick={this.changeState} />
                <SidebarComponent data={curViewObj.data || []} />
                <MainComponent data={curViewObj} />
            </div>
        );
    }
}

export default AppComponent;
