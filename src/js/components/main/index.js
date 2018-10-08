import React from 'react';
import { Route } from 'react-router-dom';

import TabsComponent from './tabsComponent';

import HomeComponent from './homeComponent';
import JSONFileRenderComponent from './jsonFileRenderComponent';
import ContactComponent from './contactComponent';

export default function MainComponent(props) {
    return (
        <main>
            <TabsComponent {...props} />
            <Route
                path="/home"
                render={() => <HomeComponent openTab={props.openTab} />}
            />
            <Route
                path="/about"
                render={() => (
                    <JSONFileRenderComponent
                        id="about"
                        data={props.data.about.data}
                    />)}
            />
            <Route
                path="/projects"
                render={() => (
                    <JSONFileRenderComponent
                        id="projects"
                        data={props.data.projects.data}
                    />)}
            />
            <Route path="/contact" component={ContactComponent} />
        </main>
    );
}
