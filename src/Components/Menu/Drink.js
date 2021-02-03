import React from "react";
import SectionNavbar from "./SectionNavbar";

const Drink = () => {
	return (
		<div id="drinkMenuSection">
			<SectionNavbar menuType="Drinks"></SectionNavbar>

			<section
				className="drinkMenuSections"
				id="tequila"
				name="Tequila"
				value="Tequila"
			>
				<h2>Tequila</h2>
			</section>
			<section className="drinkMenuSections" id="margaritas" value="Margaritas">
				<h2>Margaritas</h2>
			</section>
			<section className="drinkMenuSections" id="cockTails" value="Cocktails">
				<h2>Cocktails</h2>
				<h2>Seasonal Cocktails</h2>
			</section>
			<section className="drinkMenuSections" id="beer" value="Beer">
				<h2>Draft Beer</h2>
				<h2>Bottled Beer</h2>
				<h3>Imported</h3>
				<h3>Domestic</h3>
				<h2>Cans</h2>
			</section>
			<section className="drinkMenuSections" id="wine" value="Wine">
				<h2>White Wines</h2>
				<h2>Red Wines</h2>
			</section>
			<section className="drinkMenuSections" id="mojitos" value="Mojitos">
				<h2>Mojitos</h2>
			</section>
			<section className="drinkMenuSections" id="Sangria" value="Sangria">
				<h2>Sangria</h2>
			</section>
		</div>
	);
};

export default Drink;
