import React from "react";
import SectionNavbar from "./SectionNavbar";
import tequila from "../../Data/tequila.js";
import margaritas from "../../Data/margaritas.js";

const Drink = () => {
	const items = (subcategory) => {
		if (subcategory === "silvers")
			return tequila.silvers.map((name) => <li>{name}</li>);
		else if (subcategory === "reposados")
			return tequila.reposados.map((name) => <li>{name}</li>);
		else if (subcategory === "anejos")
			return tequila.anejos.map((name) => <li>{name}</li>);
		else if (subcategory === "reservas")
			return tequila.reservas.map((name) => <li>{name}</li>);
		else if (subcategory === "margaritas")
			return margaritas.map((object) => (
				<li>
					<h4>{object.name}</h4>
					<p>{object.description}</p>
				</li>
			));
	};
	return (
		<div id="drinkMenuSection">
			<SectionNavbar menuType="Drinks"></SectionNavbar>

			<section className="drinkMenuSections" id="Tequila">
				<h2>Tequila</h2>
				<ul>
					<h3>Silvers</h3>
					{items("silvers")}
				</ul>
				<ul>
					<h3>Reposados</h3>
					{items("reposados")}
				</ul>
				<ul>
					<h3>Anejos</h3>
					{items("anejos")}
				</ul>
				<ul>
					<h3>Reservas</h3>
					{items("reservas")}
				</ul>
				<div>
					<h2>Flights</h2>
					<p>Three 1/2 OZ Glasses of Specialty Tequila for Sampling</p>
					<p>We Recommend Trying One of Two Options:</p>
					<p>
						One Brand with Three Ages or One Age with Three Different Brands.
					</p>
				</div>
			</section>
			<section className="drinkMenuSections" id="Margaritas">
				<h2>Margaritas</h2>
				<ul> {items("margaritas")}</ul>
			</section>
			<section className="drinkMenuSections" id="Cocktails" value="Cocktails">
				<div>
					<h2>Cocktails</h2>
					<ul>
						<h3>Everyday Cocktails</h3>
					</ul>
					<ul>
						<h3>Seasonal Cocktails</h3>
					</ul>
				</div>
			</section>

			<section className="drinkMenuSections" id="Beer">
				<h2>Beer</h2>
				<div>
					<h3>Draft Beer</h3>
					<ul></ul>
				</div>

				<div>
					<h3>Bottled Beer</h3>
					<ul>
						<h3>Imported</h3>
						<h3>Domestic</h3>
					</ul>
				</div>
				<div>
					<h2>Cans</h2>
				</div>
			</section>
			<section className="drinkMenuSections" id="Wine">
				<div>
					<h2>Wine</h2>
					<ul>
						<h2>White Wines</h2>
					</ul>
					<ul>
						<h2>Red Wines</h2>
					</ul>
				</div>
			</section>
			<section className="drinkMenuSections" id="Mojitos">
				<div>
					<h2>Mojitos</h2>
					<ul></ul>
				</div>
			</section>
			<section className="drinkMenuSections" id="Sangria">
				<div>
					<h2>Sangria</h2>
					<ul></ul>
				</div>
			</section>
		</div>
	);
};

export default Drink;
