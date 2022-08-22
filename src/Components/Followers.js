import React from "react";
import Card from "./Card";
import { data } from "../data";

const Followers = () => {
	return (
		<div className="followers">
			<div className="container">
				<div className="cards">
					{data.map((item, key) => {
						return <Card key={key} isSmall={false} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Followers;
