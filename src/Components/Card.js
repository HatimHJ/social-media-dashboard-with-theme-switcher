import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";

import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";
function Card({ item }) {
	let image = null;
	let border = "";

	const { icon, name, totalFollowers, todayFollowers, isLost } = item.overall;
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
				<img src={image} alt="" />
				<span className="text-bold-gray"> {name}</span>
			</div>
			{/* totalnumbers */}
			<div className="totalnumbers text-center">
				<span className="number block">
					{totalFollowers > 9999 ? `${totalFollowers / 1000}K` : totalFollowers}
				</span>
				<span>{icon !== "youtube" ? "FOLLOWERS" : "SUBSCRIBERS"}</span>
			</div>
			{/* todaynumbers */}
			<div className={`todaynumbers ${isLost ? "down" : "up"}`}>
				<img src={`${isLost ? down : up}`} alt="" />
				<span className="number">{todayFollowers} Today</span>
			</div>
		</div>
	);
}

export default Card;
