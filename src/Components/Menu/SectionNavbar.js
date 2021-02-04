import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

const SectionNavbar = (props) => {
	const [sections, setSections] = useState([]);

	useEffect(() => {
		if (props.menuType === "Food") {
			setSections(
				Array.from(document.getElementsByClassName("foodMenuSections"))
			);
		} else if (props.menuType === "Drinks") {
			setSections(
				Array.from(document.getElementsByClassName("drinkMenuSections"))
			);
		}
	}, []);

	const sectionButtonRender = () => {
		return sections.map((element) => (
			<a key={uniqid()} href={`#${element.id}`}>
				<button key={uniqid()}>{element.id}</button>
			</a>
		));
	};

	return <div id="sectionNavbar">{sectionButtonRender()}</div>;
};

export default SectionNavbar;
