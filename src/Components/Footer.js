import React from "react";
import Facebook from "../ImagesAndIcons/icons8-facebook.svg";
import Instagram from "../ImagesAndIcons/icons8-instagram.svg";
import Twitter from "../ImagesAndIcons/icons8-twitter-24.png";

const Footer = () => {
	const mapSelector = (e) => {
		let lat;
		let long;
		if (e.target.innerHTML.includes("Sylvania")) {
			lat = 41.70780467529152;
			long = -83.7003089845397;
		} else {
			lat = 41.521972383742984;
			long = -83.63839883696589;
		}

		if (
			/* if we're on iOS, open in Apple Maps */
			navigator.platform.indexOf("iPhone") !== -1 ||
			navigator.platform.indexOf("iPad") !== -1 ||
			navigator.platform.indexOf("iPod") !== -1
		)
			window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
		/* else use Google */ else
			window.open(`https://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
	};

	return (
		<div id="footer">
			<div className="footerDivs" id="sylvaniaLocationContainer">
				<h3>Sylvania Location</h3>

				<p className="addressLink" onClick={(e) => mapSelector(e)}>
					5147 S Main St. Sylvania, OH 43560
				</p>

				<a className="phoneLink" href="tel: 419-517-0233">
					<p>419-517-0233</p>
				</a>
			</div>
			<div className="footerDivs" id="perrysburgLocationContainer">
				<h3>Perrysburg Location</h3>
				<p className="addressLink" onClick={(e) => mapSelector(e)}>
					25481 N Dixie Hwy, Perrysburg, OH 43551
				</p>
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
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/tekelamexican"
						>
							<img src={Facebook} alt="facebook"></img>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/tekelaperrysburg/?hl=en"
						>
							<img src={Instagram} alt="Instagram"></img>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/intent/follow?original_referer=https%3A//twitter.com/about/resources/buttons&screen_name=tekelacocina&tw_p=followbutton&variant=2.0"
						>
							<img src={Twitter} alt="Twitter"></img>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
