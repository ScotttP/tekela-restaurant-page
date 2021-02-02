import React from "react";

const Contact = () => {
	const submitContactForm = () => {
		console.log("submitted form");
	};
	return (
		<div id="contactFormDiv">
			<div id="imageDiv">
				<h3 id="contactHeader">Contact Us</h3>
			</div>

			<form id="contactForm" onSubmit={submitContactForm}>
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
				<button type="submit">
					<b>Send</b>
				</button>
			</form>
		</div>
	);
};

export default Contact;
