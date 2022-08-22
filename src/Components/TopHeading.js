import React from "react";
import Toggler from "./Toggler";

const TopHeading = ({ themeRef }) => {
	return (
		<div className="top-heading py-6">
			<div className="container">
				<div className="heading">
					<h2>Social Media Dashoard</h2>
					<p className="total mt-1 text-bold-gray">Total Followers: 23,004</p>
				</div>
				<div className="toggle">
					<Toggler themeRef={themeRef} />
				</div>
			</div>
		</div>
	);
};

export default TopHeading;
