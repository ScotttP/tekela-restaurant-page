import React, { useState, useEffect } from "react";

import Loading from "../ImagesAndIcons/loading.svg";
import { Document } from "react-pdf";
import { Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF = (props) => {
	const [pagesArray, setPagesArray] = useState([]);

	useEffect(() => {
		if (props.menuType === "food") setPagesArray([2, 3, 4, 5, 6, 7]);
		if (props.menuType === "drinks") setPagesArray([1, 2, 3, 4, 5, 6, 7, 8]);
	}, [props.menu]);
	return (
		<section>
			<Document
				file={props.menu}
				options={{ workerSrc: "/pdf.worker.js" }}
				onLoadError={() => alert("looks like an error occured")}
				onSourceError={() =>
					alert(
						"Looks like there was a source error...refresh the page and try again."
					)
				}
				loading={
					<img
						style={{ height: 150, width: 150 }}
						alt="loading..."
						src={Loading}
					></img>
				}
			>
				{pagesArray.map((page) => (
					<Page key={page} scale={props.scale} pageNumber={page} loading={""} />
				))}
			</Document>
		</section>
	);
};

export default PDF;
