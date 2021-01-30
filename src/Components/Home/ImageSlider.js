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
		<div id="imageSlider">
			<div id="linkDiv">
				<h2>View Our Menus</h2>
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
		</div>
	);
};

export default ImageSlider;
