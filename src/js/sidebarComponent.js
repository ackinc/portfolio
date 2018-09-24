import React from 'react';

function SidebarComponent(props) {
    return (
        <aside className={props.data.length === 0 ? 'hidden' : ''}>
            <h1>PROJECTS</h1>
            {props.data.map(elem => {
                return (
                    <div className="project">
                        <p className="project-title"><span className="project-name">{elem.name}</span><span className="project-type">({elem.type})</span></p>
                        <p className="project-company-desc">About company: {elem.company_desc}</p>
                    </div>
                );
            })}
        </aside>
    );
}

export default SidebarComponent;
