import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const submitContactForm = (e) => {
		e.preventDefault();
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
		toast.success("Your Message Has Been Sent!");
	};
	return (
		<div id="contactFormDiv">
			<div id="imageDiv">
				<h3 id="contactHeader">Contact Us</h3>
			</div>
			<ToastContainer />

			<form id="contactForm" onSubmit={(e) => submitContactForm(e)}>
				<label htmlFor="name">
					Name:
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					></input>
				</label>
				<label htmlFor="email">
					Email:
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
				</label>
				<label htmlFor="subject">
					Subject:
					<input
						id="subject"
						type="text"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
					></input>
				</label>

				<label htmlFor="message">
					Message:
					<textarea
						id="message"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</label>
				<button type="submit">
					<b>Send</b>
				</button>
			</form>
		</div>
	);
};

export default Contact;
