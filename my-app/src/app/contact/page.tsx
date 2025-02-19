import React from "react";

export default function Contact() {
    return (
        <div className="bg-slate-300">
            <h1>Contact Us!</h1>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" required />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" required />
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" defaultValue="Type your message here" required />
                <input type="submit" defaultValue="Submit" required />
            </form>
        </div>
    );
}