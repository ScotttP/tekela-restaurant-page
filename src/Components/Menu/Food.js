import React, { useState } from "react";
import SectionNavbar from "./SectionNavbar";
import drinkMenu from "../../tekela_drink_menu.pdf";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Food = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		<div id="foodMenuSectionDiv">
			<SectionNavbar menuType="Food"></SectionNavbar>
			<Document file={drinkMenu} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
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
			</section>
		</div>
	);
};

export default Food;
