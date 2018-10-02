import React from 'react';

export default function ContactComponent(props) {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" ></textarea>
                <input type="submit" />
            </form>
        </div>
    );
}
