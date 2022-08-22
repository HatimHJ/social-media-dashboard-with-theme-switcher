import React, { useState } from "react";

const Toggler = ({ themeRef }) => {
	const [isDark, setIsDark] = useState(false);

	const handleTSwitch = () => {
		themeRef.current.classList.toggle("dark");
		setIsDark(!isDark);
	};
	return (
		<>
			<p className="mode text-bold-gray">
				{isDark ? " Dark " : " Light "}
				Mode
			</p>
			<button className="btn btn-switch" onClick={handleTSwitch}></button>
		</>
	);
};

export default Toggler;
