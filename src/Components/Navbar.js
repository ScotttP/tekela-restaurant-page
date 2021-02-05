import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
	const toggleMenuDisplay = () => {
		let mainNav = document.getElementById("jsMenu");
		mainNav.classList.toggle("active");
	};

	return (
		<header id="navbarContainer">
			<div id="logoAndToggleDiv">
				<Link to="/Home" id="logo">
					tékēla
				</Link>
				<span
					className="navbarToggle"
					id="js-navbar-toggle"
					onClick={() => toggleMenuDisplay()}
				>
					<FontAwesomeIcon
						style={{ color: "#75da23" }}
						icon={faBars}
					></FontAwesomeIcon>
				</span>
			</div>

			<ul className="mainNavbar" id="jsMenu">
				<li>
					<Link to="/Food" className="navbarLinks">
						Food
					</Link>
				</li>
				<li>
					<Link to="/Drinks" className="navbarLinks">
						Drinks
					</Link>
				</li>
				<li>
					<Link to="/Contact" className="navbarLinks">
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
