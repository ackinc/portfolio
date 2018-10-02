import React from 'react';

export default function ContactComponent(props) {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="name" placeholder="Name" autocomplete="off" autoFocus />
                <input type="email" name="email" placeholder="Email" autocomplete="off" />
                <input type="text" name="message" placeholder="Message" autocomplete="off" />
                <input type="submit" value="Send message!" />
            </form>
        </div>
    );
}
