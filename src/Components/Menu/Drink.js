import React, { useState, useLayoutEffect, Suspense, lazy } from "react";
import drinkMenu from "../../tekela-drink-menu-compressed.pdf";
const PDF = lazy(() => import("../PDF"));

const Drink = () => {
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		if (window.innerWidth >= 955) setScale(1.5);
		else if (window.innerWidth >= 365 && window.innerWidth < 955) setScale(1);
		else setScale(0.8);
	}, []);

	return (
		<div id="drinkMenuSectionDiv">
			<div className="menu" id="drinkMenu">
				<Suspense fallback={<div>loading....</div>}>
					<PDF scale={scale} menu={drinkMenu} menuType="drinks"></PDF>
				</Suspense>
			</div>
		</div>
	);
};

export default Drink;
