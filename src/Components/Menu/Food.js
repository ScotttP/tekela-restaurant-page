import React, { useState, useLayoutEffect } from "react";
import SectionNavbar from "./SectionNavbar";
import foodMenu from "../../tekela_dinner_menu.pdf";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Food = () => {
	const [scale, setScale] = useState(() => {
		if (window.innerWidth >= 955) {
			return 1.5;
		} else if (window.innerWidth >= 628 && window.innerWidth < 955) {
			return 1;
		} else if (window.innerWidth >= 450 && window.innerWidth < 627) {
			return 0.8;
		} else return 0.6;
	});

	// const setPageScale = () => {
	// 	if
	// };

	useLayoutEffect(() => {
		console.log("change the scale yo!");
	});

	return (
		<div id="foodMenuSectionDiv">
			{/* <SectionNavbar menuType="Food"></SectionNavbar> */}
			<div className="menu" id="foodMenu">
				<Document file={foodMenu} loading={"loading..."}>
					{[2, 3, 4, 5, 6, 7].map((page) => (
						<Page
							scale={scale}
							pageNumber={page}
							loading={""}
							// onLoadSuccess={setPageScale}
						/>
					))}
				</Document>
			</div>
			{/* 
			<section className="foodMenuSections" value="Appetizers">
				<h2>Appetizers</h2>
			</section>
			<section className="foodMenuSections" value="Lunch">
				<h2>Lunch</h2>
			</section>
			<section className="foodMenuSections" value="Dinner">
				<h2>Dinner</h2>
			</section>
			<section className="foodMenuSections" value="Kids Menu">
				<h2>Kids Menu</h2>
			</section>
			<section className="foodMenuSections" value="Desserts">
				<h2>Desserts</h2>
			</section> */}
		</div>
	);
};

export default Food;
