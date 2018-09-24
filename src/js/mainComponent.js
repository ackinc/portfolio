import React from 'react';

function HomeComponent(props) {
    return (
        <main>
            <div id="home-page-content">
                <div className="display-pic">
                    <img src={props.data['display-pic']} alt="display picture" />
                </div>

                <div className="elevator-intro">
                    <h1 className="name">{props.data.name.toUpperCase()}</h1>
                    <p className="tagline">{props.data.tagline}</p>
                </div>

                <p className="about">{props.data.about}</p>

                <div className="social">
                    {props.data.social.map(social => {
                        return (
                            <a href={social.url} key={social.name} target="_blank">
                                <img src={social.icon} alt={social.name} title={social.name} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

function MainComponent(props) {
    if (props.data.__name === 'home') return <HomeComponent data={props.data} />;

    return <main><h1>PLACEHOLDER</h1></main>;
}

export default MainComponent;
