import React from "react";
import CardStat from "./CardStat";
import { statistic } from "../staatisticData";

const Statistic = () => {
	return (
		<div className="small-card">
			<div className="container">
				<div className="cards">
					{statistic.map((item, key) => {
						return <CardStat key={key} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Statistic;
