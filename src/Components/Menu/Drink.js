import React from "react";
import SectionNavbar from "./SectionNavbar";

const Drink = () => {
	return (
		<div id="drinkMenuSection">
			<SectionNavbar menuType="Drinks"></SectionNavbar>
			<section className="drinkMenuSections" id="Liquor">
				<h2>Liquor</h2>
			</section>
			<section className="drinkMenuSections" id="Beer">
				<h2>Beer</h2>
			</section>
			<section className="drinkMenuSections" id="Wine">
				<h2>Wine</h2>
			</section>
			<section className="drinkMenuSections" id="Mix Drinks">
				<h2>Mix Drinks</h2>
			</section>
		</div>
	);
};

export default Drink;
