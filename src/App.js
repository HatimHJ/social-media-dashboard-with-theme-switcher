import { useRef } from "react";
import Followers from "./Components/Followers";
import Statistic from "./Components/Statistic";
import SubHeading from "./Components/SubHeading";
import TopHeading from "./Components/TopHeading";

function App() {
	const themeRef = useRef(null);

	return (
		<div ref={themeRef} className="all pb-4">
			<TopHeading themeRef={themeRef} />
			<Followers />
			<SubHeading />
			<Statistic />
		</div>
	);
}

export default App;
