import React from 'react';

import SidebarComponent from './sidebar';
import MainComponent from './main';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedTabs: ['home'],
            activeTabIdx: 0,
        };

        this.openTab = this.openTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
    }

    openTab(name) {
        this.setState(prevState => {
            const idx = prevState.openedTabs.indexOf(name);
            let newState;

            if (idx === -1) {
                newState = {
                    openedTabs: [...prevState.openedTabs, name],
                    activeTabIdx: prevState.openedTabs.length,
                };
            } else {
                newState = {
                    activeTabIdx: idx,
                };
            }

            return newState;
        });
    }

    closeTab(name) {
        this.setState(prevState => {
            const idx = prevState.openedTabs.indexOf(name);

            if (idx === -1) return prevState;

            // must have at least one tab open
            if (prevState.openedTabs.length === 1) return prevState;

            const newTabs = prevState.openedTabs.concat([]);
            newTabs.splice(idx, 1);

            const newIdx = Math.min(prevState.activeTabIdx, newTabs.length - 1);

            this.props.history.push(`/${newTabs[newIdx]}`);

            return {
                openedTabs: newTabs,
                activeTabIdx: newIdx,
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <SidebarComponent
                    data={this.props.data}
                    openTab={this.openTab}
                    closeTab={this.closeTab}
                />
                <MainComponent
                    data={this.props.data}
                    openTab={this.openTab}
                    closeTab={this.closeTab}
                    {...this.state}
                />
            </React.Fragment>
        );
    }
}

export default AppComponent;
