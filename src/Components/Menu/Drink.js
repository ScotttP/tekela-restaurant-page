import React, { useState, useLayoutEffect } from "react";
import drinkMenu from "../../tekela_drink_menu.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
				<Document file={drinkMenu} loading={"loading..."}>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
						<Page scale={scale} pageNumber={page} loading={""} />
					))}
				</Document>
			</div>
		</div>
	);
};

export default Drink;
