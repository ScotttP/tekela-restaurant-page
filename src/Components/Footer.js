import React from "react";
import Facebook from "../ImagesAndIcons/icons8-facebook.svg";
import Instagram from "../ImagesAndIcons/icons8-instagram.svg";
import Twitter from "../ImagesAndIcons/icons8-twitter-24.png";

const Footer = () => {
	return (
		<div id="footer">
			<div id="addressContainer">
				{" "}
				<h3>5147 S Main St. Sylvania, OH 43560 -- 419-517-0233</h3>
				<h3>25481 N Dixie Hwy, Perrysburg, OH 43551 -- 419-874-8800</h3>
			</div>
			<div id="socialsContainer">
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
