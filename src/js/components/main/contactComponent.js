import React from 'react';

export default function ContactComponent(props) {
    const lineNums = [];
    for (let i = 0; i < 5; i++) {
        lineNums.push(i + 1);
    }

    return (
        <div id="contact">
            <div id="gutter">
                {lineNums.map(n => <div key={n}>{n}</div>)}
            </div>
            <div>
                <h1>Contact Me</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="name" placeholder="Name" autoComplete="off" autoFocus />
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="text" name="message" placeholder="Message" autoComplete="off" />
                    <input type="submit" value="Send message!" />
                </form>
            </div>
        </div>
    );
}
