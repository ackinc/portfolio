import React from 'react';

export default function ContactComponent(props) {
    const lineNums = [];
    for (let i = 0; i < 5; i++) {
        lineNums.push(i + 1);
    }

    return (
        <div id="contact">
            <div id="gutter">
                {lineNums.map(n => <div>{n}</div>)}
            </div>
            <div>
                <h1>Contact Me</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="name" placeholder="Name" autocomplete="off" autoFocus />
                    <input type="email" name="email" placeholder="Email" autocomplete="off" />
                    <input type="text" name="message" placeholder="Message" autocomplete="off" />
                    <input type="submit" value="Send message!" />
                </form>
            </div>
        </div>
    );
}
