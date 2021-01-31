import React from "react";

const Contact = () => {
	const submitContactForm = () => {
		console.log("submitted form");
	};
	return (
		<div id="contactFormDiv">
			<form id="contactForm" onSubmit={submitContactForm}>
				<h3>Contact Us</h3>
				<label htmlFor="name">
					Name:
					<input id="name" type="text" required></input>
				</label>
				<label htmlFor="email">
					Email:
					<input id="email" type="email" required></input>
				</label>
				<label htmlFor="subject">
					Subject:
					<input id="subject" type="text" required></input>
				</label>

				<label htmlFor="message">
					Message:
					<textarea id="message" type="text" required></textarea>
				</label>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Contact;
