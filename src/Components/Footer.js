import React from "react";
import Facebook from "../ImagesAndIcons/icons8-facebook.svg";
import Instagram from "../ImagesAndIcons/icons8-instagram.svg";
import Twitter from "../ImagesAndIcons/icons8-twitter-24.png";

const Footer = () => {
	return (
		<div id="footer">
			<div className="footerDivs" id="sylvaniaLocationContainer">
				<h3>Sylvania Location</h3>
				<a className="addressLink" href="" target="_blank">
					<p>5147 S Main St. Sylvania, OH 43560</p>
				</a>
				<a className="phoneLink" href="tel: 419-517-0233">
					<p>419-517-0233</p>
				</a>
			</div>
			<div className="footerDivs" id="perrysburgLocationContainer">
				<h3>Perrysburg Location</h3>
				<a className="addressLink" href="" target="_blank">
					<p>25481 N Dixie Hwy, Perrysburg, OH 43551</p>{" "}
				</a>
				<a className="phoneLink" href="tel: 419-874-8800">
					<p>419-874-8800</p>
				</a>
			</div>
			<div className="footerDivs" id="hoursOfOperation">
				<h3>Hours</h3>
				<p>Sunday - Thursday: 11:00AM - 9:30PM</p>
				<p>Friday - Saturday: 11:00AM - 10:00PM</p>
			</div>
			<div className="footerDivs" id="socialsContainer">
				<h3>Follow Us</h3>
				<ul id="socialsList">
					<li>
						<img src={Facebook} alt="facebook"></img>
					</li>
					<li>
						<img src={Instagram} alt="facebook"></img>
					</li>
					<li>
						<img src={Twitter} alt="facebook"></img>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
