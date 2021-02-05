import React from "react";
import foodMenu from "../tekela_dinner_menu.pdf";
import { Document } from "react-pdf";
import { Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF = (props) => {
	return (
		<div>
			<Document file={foodMenu} options={{ workerSrc: "/pdf.worker.js" }}>
				{[2, 3, 4, 5, 6, 7].map((page) => (
					<Page key={page} scale={props.scale} pageNumber={page} loading={""} />
				))}
			</Document>
		</div>
	);
};

export default PDF;
