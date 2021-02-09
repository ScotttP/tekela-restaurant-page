import React from "react";
import ImageSlider from "./ImageSlider";
import AboutUs from "./AboutUs";

const Home = () => {
	return (
		<div id="homepage">
			<ImageSlider></ImageSlider>

			<section id="happyHourBanner">
				<h2>
					Happy Hour 3-5:30PM Everyday: Half Off Appetizers & All Alcoholic
					Drinks!
				</h2>
			</section>
			<AboutUs></AboutUs>
		</div>
	);
};

export default Home;
