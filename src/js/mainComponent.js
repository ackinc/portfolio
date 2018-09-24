import React from 'react';

function HomeComponent(props) {
    return (
        <main>
            <div id="content">
                <div className="display-pic">
                    <img src={props.data['display-pic']} alt="display picture" />
                </div>

                <div className="elevator-intro">
                    <h1 className="name">{props.data.name.toUpperCase()}</h1>
                    <p className="tagline">{props.data.tagline}</p>
                </div>

                <p className="about">{props.data.about}</p>
            </div>
        </main>
    );
}

function MainComponent(props) {
    if (props.data.__name === 'home') return <HomeComponent data={props.data} />;

    return <main><h1>PLACEHOLDER</h1></main>;
}

export default MainComponent;
