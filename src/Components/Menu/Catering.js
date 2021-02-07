import React, { useState, useLayoutEffect, Suspense, lazy } from "react";

import cateringMenu from "../../tekela-catering-compressed.pdf";
const PDF = lazy(() => import("../PDF"));

const Food = () => {
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		if (window.innerWidth >= 955) setScale(1.2);
		else if (window.innerWidth >= 859 && window.innerWidth < 955) setScale(1);
		else if (window.innerWidth >= 635 && window.innerWidth < 859) setScale(0.7);
		else if (window.innerWidth > 340 && window.innerWidth < 635) setScale(0.4);
		else setScale(0.3);
	}, []);

	return (
		<section id="cateringMenuSectionDiv">
			<section className="menu" id="cateringMenu">
				<Suspense fallback={<div className="menu"></div>}>
					<PDF scale={scale} menu={cateringMenu} menuType="catering"></PDF>
				</Suspense>
			</section>
		</section>
	);
};

export default Food;
