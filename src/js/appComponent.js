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
        const curViewObj = this.props.data[this.props.data.findIndex(elem => elem.name === this.state.curView)];
        return (
            <div id="container">
                <NavComponent elems={this.props.data} handleClick={this.changeState} />
                <SidebarComponent data={curViewObj.data || []} />
                <MainComponent />
            </div>
        );
    }
}

export default AppComponent;
