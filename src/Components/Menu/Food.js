import React from "react";
import SectionNavbar from "./SectionNavbar";

const Food = () => {
	return (
		<div id="foodMenuSectionDiv">
			<SectionNavbar menuType="Food"></SectionNavbar>
			<section className="foodMenuSections" id="Appetizers">
				<h2>Appetizers</h2>
			</section>
			<section className="foodMenuSections" id="Lunch">
				<h2>Lunch</h2>
			</section>
			<section className="foodMenuSections" id="Dinner">
				<h2>Dinner</h2>
			</section>
			<section className="foodMenuSections" id="Kids Menu">
				<h2>Kids Menu</h2>
			</section>
			<section className="foodMenuSections" id="Desserts">
				<h2>Desserts</h2>
			</section>
		</div>
	);
};

export default Food;
