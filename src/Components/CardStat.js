import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";

import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

function CardStat({ item }) {
	let image = null;
	let border = "";

	const { icon, name, todayFollowers, isLost, percent } = item;
	switch (icon) {
		case "facebook":
			image = facebook;
			border = "fb-border";
			break;
		case "instagram":
			image = instagram;
			border = "in-border";
			break;
		case "twitter":
			image = twitter;
			border = "tw-border";
			break;
		case "youtube":
			image = youtube;
			border = "yt-border";
			break;
		default:
			image = "";
			border = "";
			break;
	}
	return (
		<div className={`card ${border}`}>
			{/* name */}
			<div className="name">
				<span className="text-bold-gray"> {name}</span>
				<img src={image} alt="" />
			</div>
			{/* todaynumbers */}
			<div className={`todaynumbers`}>
				<span className="number">
					{todayFollowers > 9999 ? `${todayFollowers / 1000}K` : todayFollowers}
				</span>
				<span className={`percent ${isLost ? "down" : "up"}`}>
					<img src={`${isLost ? down : up}`} alt="" />
					{percent}%
				</span>
			</div>
		</div>
	);
}

export default CardStat;
