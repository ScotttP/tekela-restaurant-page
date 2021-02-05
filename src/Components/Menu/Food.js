import React, { useState, useLayoutEffect, Suspense, lazy } from "react";
// import foodMenu from "../../tekela_dinner_menu.pdf";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const Document = lazy(() => import("react-pdf"));
// const Page = lazy(() => import("react-pdf"));

const PDF = lazy(() => import("../PDF"));

const Food = () => {
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		if (window.innerWidth >= 955) setScale(1.2);
		else if (window.innerWidth >= 628 && window.innerWidth < 955) setScale(1);
		else if (window.innerWidth >= 450 && window.innerWidth < 627) setScale(0.8);
		else if (window.innerWidth > 340 && window.innerWidth < 450) setScale(0.6);
		else setScale(0.5);
	}, []);

	return (
		<div id="foodMenuSectionDiv">
			<div className="menu" id="foodMenu">
				<Suspense fallback={<div>loading....</div>}>
					<PDF scale={scale}></PDF>
				</Suspense>
			</div>
		</div>
	);
};

export default Food;
