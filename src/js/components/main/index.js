import React from 'react';
import { Route } from 'react-router-dom';

import TabsComponent from './tabsComponent';

import HomeComponent from './homeComponent';
import AboutComponent from './aboutComponent';
// import ProjectListComponent from './projectListComponent';
import ContactComponent from './contactComponent';

export default function MainComponent(props) {
    return (
        <main>
            <TabsComponent {...props} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/about" render={() => <AboutComponent data={props.data.about.data} />} />
            {/* <Route path="/projects" component={ProjectListComponent} /> */}
            <Route path="/contact" component={ContactComponent} />
        </main>
    );
}
