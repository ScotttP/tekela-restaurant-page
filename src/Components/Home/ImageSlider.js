import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import taco1 from "../../ImagesAndIcons/tacos.jpeg";
import taco2 from "../../ImagesAndIcons/tacos-2.jpeg";
import alcohol2 from "../../ImagesAndIcons/alcohol-2.jpeg";

const ImageSlider = () => {
	const [index, setIndex] = useState(1);
	const images = [taco1, taco2, alcohol2];

	useEffect(() => {
		const imageSlider = document.querySelector("#imageSlider");
		if (imageSlider.style.backgroundImage === "") {
			imageSlider.style.backgroundImage = `url(${images[0]})`;
		}

		const interval = setInterval(() => {
			console.log("setInterval");
			imageSlider.style.backgroundImage = `url(${images[index]})`;
			setIndex((prevState) => {
				if (prevState >= images.length - 1) return 0;
				else return ++prevState;
			});
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<section id="imageSlider">
			<div id="linkDiv">
				<h3 id="viewMenusHeader">View Our Menus</h3>
				<div id="buttonDiv">
					<Link to="/Food">
						<button>
							<b>Food</b>
						</button>
					</Link>
					<Link to="/Drinks">
						<button>
							<b>Drinks</b>
						</button>
					</Link>
					<Link to="/Catering">
						<button>
							<b>Catering</b>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ImageSlider;
