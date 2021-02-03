import React, { useEffect, useState } from "react";

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
	}, [props.menuType]);

	const sectionButtonRender = () => {
		return sections.map((element) => (
			<a key={`${element.id}Link`} href={`#${element.id}`}>
				<button key={element.id}>{element.id}</button>
			</a>
		));
	};

	return <div id="sectionNavbar">{sectionButtonRender()}</div>;
};

export default SectionNavbar;
