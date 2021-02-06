import React, { useState, useLayoutEffect, Suspense, lazy } from "react";
import foodMenu from "../../tekela-dinner-menu-compressed.pdf";
const PDF = lazy(() => import("../PDF"));

const Food = () => {
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		if (window.innerWidth >= 955) setScale(1.2);
		else if (window.innerWidth >= 628 && window.innerWidth < 955) setScale(1);
		else if (window.innerWidth >= 450 && window.innerWidth < 627) setScale(0.8);
		else if (window.innerWidth > 340 && window.innerWidth < 450) setScale(0.5);
		else setScale(0.4);
	}, []);

	return (
		<section id="foodMenuSectionDiv">
			<section className="menu" id="foodMenu">
				<Suspense fallback={<div className="menu"></div>}>
					<PDF scale={scale} menu={foodMenu} menuType="food"></PDF>
				</Suspense>
			</section>
		</section>
	);
};

export default Food;
