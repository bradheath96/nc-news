import { Routes, Route } from "react-router-dom";
import Home from "./home";

const Container = () => {
	return (
		<div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default Container;
