import React from "react";
import { Link } from "react-router-dom";

const ImageSlider = () => {
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		console.log("move to next image");
	// 	}, 3000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

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
				</div>
			</div>
		</section>
	);
};

export default ImageSlider;
